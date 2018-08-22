class ServiceFactory {
  constructor({
    dbContext,
    logger
  }) {
    this.dbContext = dbContext;
    this.logger = logger;
  }

  create({
    module,
    name
  }) {
    const service = require(`${process.env.BASE_PATH}/${module}/${name}`);
    return new service(this.dbContext, this.logger, this.tenantSettings);
  }
}

module.exports = ServiceFactory;
