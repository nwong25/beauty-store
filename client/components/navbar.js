import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import locale from '../locale'
import NavButton from './shared-components/NavButtons'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="nav-section">
    <h1 className="storeHeader">{locale.STORE_NAME}</h1>
    <nav>
      {isLoggedIn ? (
        <div className="nav-row">
          {/* The navbar will show these links after you log in */}
          <NavButton buttonTitle={locale.NAV_LINK_HOME} link="/home" />
          <NavButton buttonTitle={locale.NAV_LINK_ACCOUNT} link="/account" />
          <NavButton
            buttonTitle={locale.NAV_LINK_ORDER_HISTORY}
            link="/orderHistory"
          />
          <NavButton
            buttonTitle={locale.NAV_LINK_PRODUCTS}
            link="/products"
          />
          <NavButton buttonTitle={locale.NAV_LINK_CART} link="/cart" />
          <NavButton
            buttonTitle={locale.NAV_LINK_LOGOUT}
            link="#"
            handleClick={handleClick}
          />
        </div>
      ) : (
        <div className="nav-row">
          {/* The navbar will show these links before you log in */}
          <NavButton buttonTitle={locale.NAV_LINK_HOME} link="/home" />
          <NavButton buttonTitle={locale.NAV_LINK_LOGIN} link="/login" />
          <NavButton buttonTitle={locale.NAV_LINK_SIGN_UP} link="/signup" />
          <NavButton
            buttonTitle={locale.NAV_LINK_PRODUCTS}
            link="/products"
          />
          <NavButton buttonTitle={locale.NAV_LINK_CART} link="/cart" />
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
