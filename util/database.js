const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Newyork@1234", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
