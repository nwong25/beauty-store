const router = require('express').Router()
const {User, Order, Product} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'adminStatus', 'address']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/order', async (req, res, next) => {
  try {
    if (req.user) {
      const orders = await Order.findAll({
        where: {
          userId: +req.user.id
        },
        include: [{model: Product}]
      })

      res.json(orders)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id
    const user = await User.findByPk(id)
    const editedUser = await user.update({adminStatus: true})
    res.status(204)
    res.json(editedUser)
  } catch (err) {
    next(err)
  }
})

module.exports = router
