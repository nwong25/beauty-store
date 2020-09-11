import React from 'react'

const ClickButton = ({className, buttonTitle, buttonType, handleClick}) => {
  return (
    <button className={className} type={buttonType} onClick={handleClick}>
      {buttonTitle}
    </button>
  )
}

export default ClickButton
