const Joi = require('joi');

class Service {
  constructor(_module, _name, isInternal, funcName) {
    this.module = _module;
    this.name = _name;
    this.isInternal = isInternal;
    this.funcName = funcName;
  }

  addToContext(dbContext, logger){
    this.dbContext = dbContext;
    this.logger = logger;
  }

  run(input) {
    return new Promise((resolve, reject) => {
      const def = require(`${process.env.BASE_PATH}/${this.isInternal? 'application-services': 'service-agents'}/${this.module}/definitions/${this.funcName}Def`);
      Joi.validate(input, def, (err) => {
        if (err) {
          throw new Error(err);
        }
      });
      const service = require(`${process.env.BASE_PATH}/${this.isInternal? 'application-services': 'service-agents'}/${this.module}/${this.name}`);
      const theService = new service(this.dbContext, this.logger);
      return theService[this.funcName](input).then((rs) => {
        resolve(rs);
      }).catch(err => {
        reject(new Error(err));
      });
    });
  }
}

module.exports = Service;