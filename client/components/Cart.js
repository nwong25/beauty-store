import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  addOrder,
  clearTheCart,
  deleteItemFromCart,
  editCartPromo,
  editCartQuantity,
  getCart,
  postToCart,
  updateInventory
} from '../store/product'
import CartItem from './CartItem'
import Checkout from './Checkout'
import locale from '../locale'

let promoCode = {}
let counter = true

class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    const {getCart} = this.props
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
    const total = cart.reduce((total, item) => {
      return ((total += item.product.price * item.number) / 100).toFixed(2)
    }, 0)
    return total
  }

  render() {
    const {cart} = this.props

    return (
      <div>
        <h2>{locale.CART}</h2>
        <div className="cart-container">
          {cart.map(item => (
            <CartItem
              item={item}
              key={item[product].id}
              editCartQuantity={editCartQuantity}
              deleteItemFromCart={deleteItemFromCart}
            />
          ))}
        </div>

        <div>{locale.ORDER_TOTAL}</div>
        <div>{this._calculateTotal()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    cart: state.products.cart,
    products: state.products.products,
    user: state.users.user
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
  clearTheCart: () => dispatch(clearTheCart()),
  deleteItemFromCart: id => dispatch(deleteItemFromCart(id)),
  editCartPromo: (id, promo) => dispatch(editCartPromo(id, promo)),
  editCartQuantity: (id, quantity) => dispatch(editCartQuantity(id, quantity)),
  getTheCart: () => dispatch(getCart()),
  postToCart: cart => dispatch(postToCart(cart)),
  updateInventory: cartItems => dispatch(updateInventory(cartItems))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
