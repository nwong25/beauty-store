import React from 'react'
import {withRouter} from 'react-router-dom'
import image from '../../public/shelfie.jpg'

const MainPage = () => {
  return (
    <div className="beauty-shelfie">
      <img src={image} alt="Skin Shelfie" />
    </div>
  )
}

export default withRouter(MainPage)
