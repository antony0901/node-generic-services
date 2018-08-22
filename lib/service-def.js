const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().required().error(new Error('REQUIRED')),
  flow: Joi.array().required().error(new Error('REQUIRED')),
});

module.exports = schema;
