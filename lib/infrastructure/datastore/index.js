const UoW = require('./uow');
const BaseRepository = require('./base-repository');

const createUoW = (dbContext) => {
  return new UoW(dbContext);
};

module.exports  = {
  createUoW,
  BaseRepository,
};