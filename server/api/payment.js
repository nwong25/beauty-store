const router = require('express').Router()
const stripe = require('../constants/stripe')

const postStripeCharge = res => (stripeErr, stripeRes) => {
  try {
    if (stripeErr) {
      res.status(500).send({error: stripeErr})
    } else {
      res.status(200).send({success: stripeRes})
    }
  } catch (error) {
    next(error)
  }
}

router.get('/', (req, res) => {
  try {
    res.send({
      message: 'Hello Stripe checkout server!',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res) => {
  try {
    stripe.charges.create(req.body, postStripeCharge(res))
  } catch (error) {
    next(error)
  }
})

module.exports = router
