import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import locale from '../locale'
import SearchBar from './SearchBar'
import NavBarLoggedIn from './NavBarLoggedIn'
import NavBarNotLoggedIn from './NavBarNotLoggedIn'

const Navbar = ({handleClick, isLoggedIn, cart}) => {
  const cartItemCount = cart.reduce((total, currentItem) => {
    return (total += currentItem.number)
  }, 0)

  return (
    <div className="nav-section">
      <h1 className="storeHeader">{locale.STORE_NAME}</h1>
      <nav>
        {isLoggedIn ? (
          <NavBarLoggedIn
            handleClick={handleClick}
            cartItemCount={cartItemCount}
          />
        ) : (
          <NavBarNotLoggedIn cartItemCount={cartItemCount} />
        )}
        <SearchBar />
      </nav>
      <hr />
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.products.cart
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

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired
}
