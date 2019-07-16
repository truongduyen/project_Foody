const Sequelize = require('sequelize');
const db = require('../config/database');

const cmt = db.define('Comments', {
  id_cmt: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content_cmt: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});
module.exports = cmt;