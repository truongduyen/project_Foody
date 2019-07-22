const Sequelize = require('sequelize');
const db = require('../config/database');

const post = db.define('Posts', {
  id_post: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
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
    type: Sequelize.TEXT,
    allowNull: true,
  },
  item: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  user_email: {
    type: Sequelize.STRING(256),
    allowNull: false,
  }
});
module.exports = post;