import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/product'
import {fetchOrders} from '../store/order'
import SingleProduct from './SingleProduct'
import image from '../../public/shelfie.jpg'

const MainPage = () => {
  return (
    <div className="beauty-shelfie">
      <img src={image} alt="skin shelfie" />
    </div>
  )
}

export default withRouter(MainPage)
