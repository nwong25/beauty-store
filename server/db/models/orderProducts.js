const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('orderProducts', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  subtotal: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderProducts
