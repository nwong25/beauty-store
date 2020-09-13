import React from 'react'
import NavButton from './shared-components/NavButtons'
import locale from '../locale'

const NavBarLoggedIn = ({handleClick, cartItemCount}) => {
  return (
    <div className="nav-row">
      <NavButton buttonTitle={locale.NAV_LINK_HOME} link="/home" />
      <NavButton buttonTitle={locale.NAV_LINK_ACCOUNT} link="/account" />
      <NavButton
        buttonTitle={locale.NAV_LINK_ORDER_HISTORY}
        link="/orderHistory"
      />
      <NavButton buttonTitle={locale.NAV_LINK_PRODUCTS} link="/products" />
      <NavButton
        buttonTitle={`${locale.NAV_LINK_CART} (${cartItemCount})`}
        link="/cart"
      />
      <NavButton
        buttonTitle={locale.NAV_LINK_LOGOUT}
        link="#"
        handleClick={handleClick}
      />
    </div>
  )
}

export default NavBarLoggedIn
