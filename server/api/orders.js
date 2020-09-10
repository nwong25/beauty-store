const router = require('express').Router()
const {Product, User, Order, OrderProducts} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{model: Product}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = router
