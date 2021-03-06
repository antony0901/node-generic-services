function create({
  module,
  name,
  dbContext,
  transaction
}) {
  const Repository = require(`${process.env.BASE_PATH}/${module}/${name}`);
  return new Repository(dbContext, transaction);
}

module.exports.create = create;