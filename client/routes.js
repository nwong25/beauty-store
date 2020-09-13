import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  MainPage,
  AllProducts,
  ProductDetails,
  Cart,
  Success
} from './components'
import {me} from './store'
import {fetchProducts} from './store/product'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchProducts()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/products?search=:search" component={AllProducts} />
        <Route
          exact
          path="/"
          render={() => (isLoggedIn ? <Redirect to="/home" /> : <MainPage />)}
        />
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" component={AllProducts} />
        <Route path="/cart" component={Cart} />

        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        <Route path="/home" component={MainPage} />
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products.products,
    searchInput: state.products.searchInput
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
