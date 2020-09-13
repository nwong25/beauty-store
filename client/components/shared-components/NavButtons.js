import React from 'react'
import {Link} from 'react-router-dom'

const NavButton = ({buttonTitle, link, handleClick}) => {
  return (
    <div className="nav-button">
      <Link to={link} onClick={handleClick}>
        {buttonTitle}
      </Link>
    </div>
  )
}

export default NavButton
