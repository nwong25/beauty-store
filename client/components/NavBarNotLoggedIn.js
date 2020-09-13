import React from 'react'
import NavButton from './shared-components/NavButtons'
import locale from '../locale'

const NavBarNotLoggedIn = ({cartItemCount}) => {
  return (
    <div className="nav-row">
      <NavButton buttonTitle={locale.NAV_LINK_HOME} link="/home" />
      <NavButton buttonTitle={locale.NAV_LINK_LOGIN} link="/login" />
      <NavButton buttonTitle={locale.NAV_LINK_SIGN_UP} link="/signup" />
      <NavButton buttonTitle={locale.NAV_LINK_PRODUCTS} link="/products" />
      <NavButton
        buttonTitle={`${locale.NAV_LINK_CART} (${cartItemCount})`}
        link="/cart"
      />
    </div>
  )
}

export default NavBarNotLoggedIn
