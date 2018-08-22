# generic-services
This is service which supports defining a business logic on a file.
The package follows the Onion Architecture then `applicaton-services` and `service-agents` must be defined in advanced.

## Usage
```javascript
const gs = require('generic-services');
const createCustomer = () => {
  const serviceStack = gs.init(__dirname, DbContext, null);
  return serviceStack.execute('case.json', {
    name: 'Antony Nguyen',
    email: 'antony.nguyen0901@gmail.com'
  }).then((rs) => {
    console.log(rs);
  });
};
```

A use-case file should be a json file as follow:

```json
{
  "name" : "create customer",
  "flow": [{
    "service": "customer-service",
    "module": "crm",
    "funcName": "createCustomer",
    "isInternal": true
  },
  {
    "service": "customer-service",
    "module": "crm",
    "funcName": "checkCustomer",
    "isInternal": true
  },
  {
    "service": "customer-service",
    "module": "crm",
    "funcName": "changeCustomerName",
    "isInternal": true
  }]
}
```
the Internal prop means the service would be executed in `application-services`. Otherwise would be called executed in `service-agents`.