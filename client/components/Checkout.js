import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import {Link} from 'react-router-dom'

import STRIPE_PUBLISHABLE from '../constants/stripe'
import PAYMENT_SERVER_URL from '../constants/server'

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Payment Successful')
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

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment)
    .then(redirect('/success'))
    .catch(errorPayment)

const Checkout = ({name, description, amount}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
)

export default Checkout
