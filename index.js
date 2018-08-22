const ServiceStack = require('./lib/service-stack');

const init = (_basePath, _dbContext, _logger) => {
  return new ServiceStack(_basePath, _dbContext, _logger);
};

module.exports.init = init;