import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  clearTheCart,
  deleteItemFromCart,
  editCartPromo,
  editCartQuantity,
  getCart,
  postToCart,
  updateInventory
} from '../store/product'
import {addOrder} from '../store/order'
import CartItem from './CartItem'
// import Checkout from './Checkout'
import locale from '../locale'
import ClickButton from './shared-components/ClickButton'

let promoCode = {}
let counter = true

class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0
    }
  }

  handleSubmit = () => {
    const {cart, addOrder, updateInventory, clearTheCart} = this.props
    addOrder(cart)
    updateInventory(cart)
    clearTheCart()
    counter = true
  }

  handleChange = event => {
    promoCode = {
      promoCode: event.target.value
    }
  }

  async applyCode() {
    try {
      if (
        counter &&
        promoCode.promoCode.toLowerCase() === this.props.user.promoCode
      ) {
        let promiseArr = this.props.cart.map(item => {
          return this.props.editPromo(item.product.id, 85)
        })

        await Promise.all(promiseArr)
        counter = false
      }
    } catch (err) {
      console.error(err)
    }
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
        <div className="cart-container">
          {cart.length ? (
            cart.map(item => <CartItem item={item} key={item.product.id} />)
          ) : (
            <div className="center-text">{locale.EMPTY_CART}</div>
          )}
          {cart.length > 0 && (
            <div className="total-cost-section">
              <div className="bold">{locale.ORDER_TOTAL}</div>
              <div className="product-price">${this._calculateTotal()}</div>
            </div>
          )}
          {isLoggedIn ? (
            <ClickButton />
          ) : (
            <Link to="/login">{locale.CHECK_OUT}</Link>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    orders: state.orders.orders,
    cart: state.products.cart,
    products: state.products.products,
    user: state.users
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
  clearTheCart: () => dispatch(clearTheCart()),
  deleteItemFromCart: id => dispatch(deleteItemFromCart(id)),
  editCartPromo: (id, promo) => dispatch(editCartPromo(id, promo)),
  editCartQuantity: (id, quantity) => dispatch(editCartQuantity(id, quantity)),
  getCart: () => dispatch(getCart()),
  postToCart: cart => dispatch(postToCart(cart)),
  updateInventory: cartItems => dispatch(updateInventory(cartItems))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
