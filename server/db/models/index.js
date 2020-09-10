const db = require('../db')
const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const OrderProducts = require('./orderProducts')

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order, {through: OrderProducts})
Order.belongsToMany(Product, {through: OrderProducts})

module.exports = {
  db,
  Order,
  User,
  Product,
  OrderProducts
}
