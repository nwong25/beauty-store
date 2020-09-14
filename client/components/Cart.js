import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import Checkout from './Checkout'
import locale from '../locale'

const Cart = ({cart, isLoggedIn}) => {
  const calculateTotal = () => {
    const totalPrice = cart.reduce((total, item) => {
      return (total += item.product.price * item.number)
    }, 0)
    return (totalPrice / 100).toFixed(2)
  }

  return (
    <div>
      <h2 className="center-text">{locale.CART}</h2>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map(item => <CartItem item={item} key={item.product.name} />)}
          <div className="total-cost-section">
            <div className="bold">{locale.ORDER_TOTAL}</div>
            <div className="product-price">${calculateTotal()}</div>
          </div>
          {isLoggedIn ? (
            <div className="strip-checkout">
              <Checkout
                name={locale.STORE_NAME}
                description={locale.ENTER_CARD}
                amount={calculateTotal()}
              />
            </div>
          ) : (
            <div className="center">
              <Link className="gray-button checkout-button" to="/login">
                {locale.CHECK_OUT}
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="center-text">{locale.EMPTY_CART}</div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.products.cart
  }
}

export default withRouter(connect(mapStateToProps)(Cart))
