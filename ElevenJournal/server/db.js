const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:Carl0Carb0nell!!@localhost:5432/eleven-journal"
);

module.exports = sequelize;
