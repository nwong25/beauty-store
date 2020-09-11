import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  fetchProducts,
  fetchOrders,
  fetchCategoryProducts
} from '../store/product'
import SingleProduct from './SingleProduct'
import locale from '../locale'
import ClickButton from './shared-components/ClickButton'

export class AllProducts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.props.fetchProducts()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products && prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products
      })
    }
  }

  render() {
    const {products} = this.state

    const {fetchCategoryProducts, fetchProducts} = this.props

    return (
      <React.Fragment>
        <ClickButton
          className="product-button"
          buttonTitle="All"
          handleClick={fetchProducts}
        />
        <ClickButton
          className="product-button"
          buttonTitle="Cleansers"
          handleClick={() => fetchCategoryProducts('cleanser')}
        />
        <ClickButton
          className="product-button"
          buttonTitle="Serums"
          handleClick={() => fetchCategoryProducts('serum')}
        />
        <ClickButton
          className="product-button"
          buttonTitle="Moisturizer"
          handleClick={() => fetchCategoryProducts('moisturizer')}
        />
        <div className="product-list">
          {products.length ? (
            products.map(product => (
              <SingleProduct product={product} key={product.id} />
            ))
          ) : (
            <div className="center">{locale.NO_PRODUCTS}</div>
          )}
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  orders: state.orders.orders,
  searchInput: state.products.searchInput
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchAllOrders: () => dispatch(fetchOrders()),
  fetchCategoryProducts: category => dispatch(fetchCategoryProducts(category))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
)
