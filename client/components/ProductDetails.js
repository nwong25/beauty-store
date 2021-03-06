import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  addCartItem,
  fetchFilteredProducts,
  postToCart,
  selectProductById
} from '../store/product'
import ClickButton from './shared-components/ClickButton'
import SelectDropDown from './shared-components/SelectDropDown'
import locale from '../locale'
import {generateQuantityOptions} from '../utility'

export class ProductDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedProduct: {},
      quantitySelected: 1,
      cart: props.cart
    }
  }
  componentDidMount() {
    const selectedProduct = this.props.selectProductById(
      this.props.match.params.id
    )
    this.setState({
      selectedProduct
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.selectedProduct &&
      prevProps.selectedProduct !== this.props.selectedProduct
    ) {
      this.setState({
        selectedProduct: this.props.selectedProduct
      })
    }
  }

  _editImageUrl = () => {
    const {imageUrl} = this.state.selectedProduct
    if (imageUrl) {
      return imageUrl.slice(0, -5)
    }
  }

  _findProductsByBrand = brand => {
    const {fetchFilteredProducts, history} = this.props
    fetchFilteredProducts(brand)
    history.push(`/products?search=${brand.toLowerCase()}`)
  }

  _selectQuantity = event => {
    this.setState({
      quantitySelected: event.target.value
    })
  }

  _addToCart = ({quantitySelected, selectedProduct}) => {
    const {addCartItem, postToCart} = this.props
    const {cart} = this.state

    const item = {
      number: +quantitySelected,
      product: selectedProduct
    }

    addCartItem(item)

    let updatedCart = [...cart]
    let newProduct = true
    updatedCart.map(currentCartItem => {
      if (currentCartItem.product.id === selectedProduct.id) {
        currentCartItem.number += action.item.number
        newProduct = false
      }
    })
    if (newProduct === true) {
      updatedCart = [...updatedCart, item]
    }
    this.setState(
      {
        cart: updatedCart
      },
      () => {
        postToCart(updatedCart)
      }
    )
  }

  render() {
    const {
      company,
      name,
      inventory,
      price,
      searchName,
      description
    } = this.state.selectedProduct

    const {quantitySelected, selectedProduct} = this.state

    return (
      <div className="product-detail-container">
        <div className="center image-container">
          <img
            className="product-image"
            src={this._editImageUrl()}
            alt={searchName}
          />
        </div>
        <div className="product-info">
          <ClickButton
            className="gray-button margin-0"
            buttonTitle={company}
            handleClick={() => this._findProductsByBrand(company)}
          />
          <div className="product-detail-name">{name}</div>
          {inventory ? (
            <div className="product-price">${(price / 100).toFixed(2)}</div>
          ) : (
            <div className="product-price">{locale.OUT_OF_STOCK}</div>
          )}

          <div>{description}</div>

          {inventory > 0 && (
            <React.Fragment>
              <SelectDropDown
                className="quantity-dropdown"
                label={locale.QUANTITY}
                handleChange={this._selectQuantity}
                options={generateQuantityOptions()}
                value={quantitySelected}
              />

              <ClickButton
                className="gray-button add-to-cart margin-0"
                buttonTitle={locale.ADD_TO_CART}
                handleClick={() =>
                  this._addToCart({quantitySelected, selectedProduct})
                }
              />
            </React.Fragment>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct,
  cart: state.products.cart
})

const mapDispatchToProps = dispatch => ({
  selectProductById: id => dispatch(selectProductById(id)),
  fetchFilteredProducts: searchTerm =>
    dispatch(fetchFilteredProducts(searchTerm)),
  postToCart: cart => dispatch(postToCart(cart)),
  addCartItem: item => dispatch(addCartItem(item))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
)
