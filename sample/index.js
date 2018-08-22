const dbContext = require('./dbContext');
const database = require('./db-config');

const gs = require('../lib');

const createCustomer = () => {
  const DbContext = new dbContext(database);
  const serviceStack = gs.init(__dirname, DbContext, null);
  return serviceStack.execute('case.json', {
    name: 'Antony Nguyen',
    email: 'antony.nguyen@unicorn.vn'
  }).then((rs) => {
    console.log(rs);
  });
};

createCustomer();