import React from 'react'
import {Link} from 'react-router-dom'

const SingleProduct = props => {
  const {company, name, id, imageUrl, inventory, price} = props.product
  return (
    <div className="product-container">
      <Link to={`/products/${id}`}>
        <img className="product-image" src={imageUrl} />
        <div className="product-name center-text">
          {company} {name}
        </div>
        {inventory ? (
          <div className="center-text product-price">
            ${(price / 100).toFixed(2)}
          </div>
        ) : (
          <div className="center-text">Out of Stock</div>
        )}
      </Link>
    </div>
  )
}

export default SingleProduct
