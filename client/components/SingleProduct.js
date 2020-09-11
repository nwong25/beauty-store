import React from 'react'
import {Link} from 'react-router-dom'
import locale from '../locale'

const SingleProduct = props => {
  const {
    company,
    name,
    id,
    imageUrl,
    inventory,
    price,
    searchName
  } = props.product
  return (
    <div className="product-container">
      <Link to={`/products/${id}`}>
        <img className="product-image" src={imageUrl} alt={searchName} />
        <div className="product-name center-text">
          {company} {name}
        </div>
        {inventory ? (
          <div className="center-text product-price">
            ${(price / 100).toFixed(2)}
          </div>
        ) : (
          <div className="center-text product-price">{locale.OUT_OF_STOCK}</div>
        )}
      </Link>
    </div>
  )
}

export default SingleProduct
