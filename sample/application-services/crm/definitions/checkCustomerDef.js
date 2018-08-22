const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().required().error(new Error('REQUIRED')),
  email: Joi.string().required().error(new Error('REQUIRED')),
});

module.exports = schema;
