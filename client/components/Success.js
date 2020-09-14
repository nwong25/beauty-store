import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {clearTheCart, updateInventory} from '../store/product'
import {addOrder, fetchOrders} from '../store/order'
import locale from '../locale'

class Success extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const {cart, addOrder, updateInventory, clearTheCart} = this.props
    addOrder(cart)
    updateInventory(cart)
    clearTheCart()
  }

  render() {
    return <div className="center thank-you">{locale.THANK_YOU}</div>
  }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Success))
