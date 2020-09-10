import React from 'react'
import {Link} from 'react-router-dom'

const NavButton = ({buttonTitle, link, handleClick}) => {
  return (
    <div className="nav-button">
      {link == '#' ? (
        <a href="#" onClick={handleClick}>
          {buttonTitle}
        </a>
      ) : (
        <Link to={link}>{buttonTitle}</Link>
      )}
    </div>
  )
}

export default NavButton
