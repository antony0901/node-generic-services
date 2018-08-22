class CustomerService {
  constructor(dbContext, logger) {
    this.dbContext = dbContext;
    this.logger = logger;
  }

  createCustomer(payload) {
    return new Promise((resolve) => {
      resolve(payload);
    });
  }

  checkCustomer(payload) {
    return new Promise((resolve) => {
      if (!payload.name) {
        throw new Error('name not found');
      }
      
      const newObj = {
        id: 1,
        name: 'Hoang Nam',
        grade: 3
      };
      
      resolve(newObj);
    });    
  }

  changeCustomerName(payload){
    return new Promise((resolve) => {
      payload.name = 'Changed Name';
      resolve(payload);
    });
  }
}

module.exports = CustomerService;