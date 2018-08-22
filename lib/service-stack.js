const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const serviceDefSchema = require('./service-def');
const dataStore = require('./infrastructure/datastore');
const service = require('./service');

class ServiceStack {
  constructor(_basePath, _dbContext, _logger) {
    process.env.BASE_PATH = _basePath;
    this.dbContext = _dbContext;
    this.logger = _logger;
  }

  execute(usecaseFile, payload) {
    const usecasePath = path.resolve(`${process.env.BASE_PATH}/usecase-definitions`, usecaseFile);
    const content = fs.readFileSync(usecasePath);
    const serviceDef = JSON.parse(content);
    Joi.validate(serviceDef, serviceDefSchema, (err) => {
      if (err) {
        throw new Error('SERVICE_DEFINITION_INVALID');
      }
    });

    const uow = dataStore.createUoW(this.dbContext);
    return uow.open(() => {
      let promises = [];
      let prevPromise = null;
      _.forEach(serviceDef.flow, (flowItem, index) => {
        const theService = new service(flowItem.module, flowItem.service, flowItem.isInternal, flowItem.funcName, payload);
        theService.addToContext(this.dbContext, this.logger);
        if (index === 0) {
          const promise = theService.run(payload);
          prevPromise = promise;
          promises.push(promise);
        } else {
          prevPromise = prevPromise.then((rs) => {
            return theService.run(rs);
          });
          promises.push(prevPromise);
        }
      });

      return Promise.all(promises);
    });
  }
}

module.exports = ServiceStack;