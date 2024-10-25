const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Using SQLite

const Rule = sequelize.define('Rule', {
  rule_string: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ast: {
    type: DataTypes.TEXT, // JSON representation of AST
    allowNull: false
  }
});

module.exports = { Rule, sequelize };
 