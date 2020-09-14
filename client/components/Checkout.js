import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

import STRIPE_PUBLISHABLE from '../constants/stripe'
import PAYMENT_SERVER_URL from '../constants/server'
import {addOrder} from '../store/order'
import {clearTheCart, updateInventory} from '../store/product'
import {connect} from 'react-redux'

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Payment Successful')
  data()
}

const errorPayment = data => {
  alert('Payment Error')
}

const redirect = url => {
  var ua = navigator.userAgent.toLowerCase(),
    isIE = ua.indexOf('msie') !== -1,
    version = parseInt(ua.substr(4, 2), 10)

  // Internet Explorer 8 and lower
  if (isIE && version < 9) {
    var link = document.createElement('a')
    link.href = url
    document.body.appendChild(link)
    link.click()
  } else {
    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
    window.location.href = url
  }
}

const onToken = ({amount, description, addOrderAndUpdateInventory}) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment(addOrderAndUpdateInventory))
    .then(redirect('/success'))
    .catch(errorPayment)

const Checkout = ({
  name,
  description,
  amount,
  cart,
  addOrder,
  clearTheCart,
  updateInventory
}) => {
  async function addOrderAndUpdateInventory() {
    await updateInventory(cart)
    await addOrder(cart)
    clearTheCart()
  }
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromUSDToCent(amount)}
      token={onToken({amount, description, addOrderAndUpdateInventory})}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    >
      <button className="btn btn-primary gray-button checkout-button">
        Pay with Card
      </button>
    </StripeCheckout>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.products.cart,
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
  clearTheCart: () => dispatch(clearTheCart()),
  updateInventory: cartItems => dispatch(updateInventory(cartItems))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
)
