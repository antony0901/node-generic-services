class CustomerServices {
  constructor(dbContext, logger) {
    this.dbContext = dbContext;
    this.logger = logger;
  }
  createCustomer(payload){
    return payload;
  }
}

module.exports = CustomerServices;
