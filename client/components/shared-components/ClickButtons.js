import React from 'react'
import {Link} from 'react-router-dom'

const ClickButton = ({className, buttonTitle, buttonType, handleClick}) => {
  return (
    <button className={className} type={buttonType} onClick={handleClick}>
      {buttonTitle}
    </button>
  )
}

export default ClickButton
