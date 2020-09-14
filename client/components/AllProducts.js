import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts, fetchCategoryProducts} from '../store/product'
import SingleProduct from './SingleProduct'
import ClickButton from './shared-components/ClickButton'
import locale from '../locale'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      searchInput: ''
    }
  }
  componentDidMount() {
    const {location, fetchProducts} = this.props

    if (!location.search.includes('search')) {
      fetchProducts()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products && prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
        searchInput: this.props.searchInput
      })
    }
  }

  render() {
    const {products} = this.state
    const {fetchCategoryProducts, fetchProducts} = this.props

    return (
      <div>
        <div className="center">
          <ClickButton
            className="gray-button"
            buttonTitle="All"
            handleClick={fetchProducts}
          />
          <ClickButton
            className="gray-button"
            buttonTitle="Cleansers"
            handleClick={() => fetchCategoryProducts('cleanser')}
          />
          <ClickButton
            className="gray-button"
            buttonTitle="Serums"
            handleClick={() => fetchCategoryProducts('serum')}
          />
          <ClickButton
            className="gray-button"
            buttonTitle="Moisturizer"
            handleClick={() => fetchCategoryProducts('moisturizer')}
          />
        </div>
        <div className="product-list">
          {products.length ? (
            products.map(product => (
              <SingleProduct product={product} key={product.id} />
            ))
          ) : (
            <div className="center">{locale.NO_PRODUCTS}</div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  searchInput: state.products.searchInput
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategoryProducts: category => dispatch(fetchCategoryProducts(category))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllProducts)
)
