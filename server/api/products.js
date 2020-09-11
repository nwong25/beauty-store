const router = require('express').Router()
const {Product, User, Order, OrderProducts} = require('../db/models')
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
  let allProducts

  try {
    if (req.query.search) {
      allProducts = await Product.findAll({
        where: {
          searchName: {
            [Op.iLike]: '%' + req.query.search + '%'
          }
        }
      })
    } else if (req.query.category) {
      allProducts = await Product.findAll({
        where: {
          category: {
            [Op.iLike]: '%' + req.query.category + '%'
          }
        }
      })
    } else {
      allProducts = await Product.findAll()
    }
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

router.get('/cart', (req, res, next) => {
  try {
    req.session.cart ? res.json(req.session.cart) : res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  if (req.user.adminStatus) {
    Product.create({
      company: req.body.title,
      description: req.body.description,
      price: req.body.price,
      inventory: req.body.inventory,
      imageUrl: req.body.imageUrl,
      category: req.body.category
    })
      .then(newProduct => res.json(newProduct))
      .catch(err => next(err))
  } else {
    res.send('not an admin')
  }
})

router.put('/:id', async (req, res, next) => {
  if (req.user.adminStatus) {
    try {
      const id = +req.params.id
      const product = await Product.findById(id)
      const editedProd = await product.update(req.body)
      res.status(204)
      res.json(editedProd)
    } catch (err) {
      next(err)
    }
  } else {
    res.send('not an admin')
  }
})

router.post('/cart', (req, res, next) => {
  req.session.cart = req.body
  res.sendStatus(201)
})

router.delete('/cart/:id', (req, res, next) => {
  const id = +req.params.id
  const newCart = req.session.cart.filter(elem => elem.product.id !== id)
  req.session.cart = newCart
  res.sendStatus(201)
})

router.post('/cart/checkout', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const cart = req.session.cart

    const orderInfo = cart.map(product => {
      return {
        quantity: product.number,
        price: +product.product.price,
        userId: userId,
        productId: product.product.id,
        promo: +product.product.promo
      }
    })
    const newItems = []
    const newOrderItem = await Order.create({userId: userId})
    let orderInforPromises = orderInfo.map((product, index) => {
      newItems.push(orderInfo[index])
      newOrderItem.addProduct(orderInfo[index].productId, {
        through: {
          price: orderInfo[index].price,
          quantity: orderInfo[index].quantity,
          promo: orderInfo[index].promo,
          subtotal:
            orderInfo[index].quantity *
            orderInfo[index].price *
            orderInfo[index].promo
        }
      })
    })

    const newOrder = await Promise.all(orderInforPromises)

    req.session.cart = []
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

router.put('/cart/checkout', (req, res, next) => {
  try {
    const cart = req.session.cart
    const changes = cart.map(async product => {
      const selectedProduct = await Product.findById(product.product.id)
      const newInventory = await selectedProduct.update({
        inventory: selectedProduct.inventory - product.number
      })
    })
    req.session.cart = []
    res.send(changes)
  } catch (error) {
    next(error)
  }
})

module.exports = router
