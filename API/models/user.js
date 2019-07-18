const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('Users', {
  username: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false
  },
  email: {
    type: Sequelize.STRING(256),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  // salt: {
  //   type: Sequelize.STRING(256),
  //   allowNull: false,
  // },
  role: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});
module.exports = user;