import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  clearTheCart,
  getCart,
  postToCart,
  updateInventory
} from '../store/product'
import {addOrder, fetchOrders} from '../store/order'
import CartItem from './CartItem'
import Checkout from './Checkout'
import locale from '../locale'

class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    const {fetchOrders} = this.props
    fetchOrders()
  }

  handleSubmit = () => {
    const {cart, addOrder, updateInventory, clearTheCart} = this.props
    addOrder(cart)
    updateInventory(cart)
    clearTheCart()
  }

  _calculateTotal = () => {
    const {cart} = this.props
    const totalPrice = cart.reduce((total, item) => {
      return (total += item.product.price * item.number)
    }, 0)
    return (totalPrice / 100).toFixed(2)
  }

  render() {
    const {cart, isLoggedIn} = this.props

    return (
      <div>
        <h2 className="center-text">{locale.CART}</h2>
        {cart.length > 0 ? (
          <div className="cart-container">
            {cart.map(item => <CartItem item={item} key={item.product.id} />)}
            <div className="total-cost-section">
              <div className="bold">{locale.ORDER_TOTAL}</div>
              <div className="product-price">${this._calculateTotal()}</div>
            </div>
            {isLoggedIn ? (
              <div className="strip-checkout">
                <Checkout
                  name={locale.STORE_NAME}
                  description={locale.ENTER_CARD}
                  amount={this._calculateTotal()}
                  OnClick={this.handleSubmit}
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
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    orders: state.orders,
    cart: state.products.cart,
    products: state.products.products,
    user: state.users
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
  clearTheCart: () => dispatch(clearTheCart()),
  getCart: () => dispatch(getCart()),
  postToCart: cart => dispatch(postToCart(cart)),
  updateInventory: cartItems => dispatch(updateInventory(cartItems)),
  fetchOrders: () => dispatch(fetchOrders())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
