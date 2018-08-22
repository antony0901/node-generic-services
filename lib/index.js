const ServiceStack = require('./service-stack');

const init = (_basePath, _dbContext, _logger) => {
  return new ServiceStack(_basePath, _dbContext, _logger);
};

module.exports.init = init;