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
  cmt_email: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(256),
    allowNull: false,
  }
});
module.exports = cmt;