const Sequelize = require("sequelize");
const instance = require("../../dataBase/index");

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("Ração", "Brinquedos"),
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
  tableName: "suppliers",
  timestamps: true,
  version: "version",
};

module.exports = instance.define("suppliers", columns, options);
