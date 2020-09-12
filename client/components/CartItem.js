import React from 'react'
import {connect} from 'react-redux'
import SelectDropDown from './shared-components/SelectDropDown'
import {Link} from 'react-router-dom'
import {generateQuantityOptions} from '../utility'
import ClickButton from './shared-components/ClickButton'
import {deleteItemFromCart, editCartQuantity} from '../store/product'
import locale from '../locale'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantitySelected: props.item.number
    }
  }

  _updateQuantityCount = event => {
    const {editCartQuantity, item} = this.props
    editCartQuantity(item.product.id, +event.target.value)

    this.setState({
      quantitySelected: +event.target.value
    })
  }

  render() {
    const {quantitySelected} = this.state
    const {deleteItemFromCart, item} = this.props

    return (
      <div className="cart-item">
        <Link className="center" to={`/products/${item.product.id}`}>
          <div className="cartInfoSpacing">
            <img
              className="product-image"
              src={item.product.imageUrl}
              alt={item.product.searchName}
            />
          </div>
          <div className="cartInfoSpacing item-info">
            <div className="cart-product bold">{item.product.company}</div>
            <div className="cart-product">{item.product.name}</div>
            <div className="cart-product product-price">
              ${(item.product.price / 100).toFixed(2)}
            </div>
          </div>
        </Link>
        <div className="quantity-remove-section">
          <div className="cartInfoSpacing cart-quantity">
            <SelectDropDown
              className="quantity-dropdown"
              label={locale.QUANTITY}
              handleChange={this._updateQuantityCount}
              options={generateQuantityOptions()}
              value={quantitySelected}
            />
          </div>
          <div className="cartInfoSpacing">
            <ClickButton
              className="gray-button"
              buttonTitle={locale.REMOVE}
              handleClick={() => deleteItemFromCart(item.product.id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.products.cart,
    user: state.users
  }
}

const mapDispatchToProps = dispatch => ({
  deleteItemFromCart: id => dispatch(deleteItemFromCart(id)),
  editCartQuantity: (id, quantity) => dispatch(editCartQuantity(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
