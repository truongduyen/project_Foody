const Sequelize = require('sequelize');
const db = require('../config/database');

const post = db.define('Posts', {
  title: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});
module.exports = post;