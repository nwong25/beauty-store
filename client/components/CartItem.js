import React from 'react'
import SelectDropDown from './shared-components/SelectDropDown'
import {generateQuantityOptions} from '../utility'
import {editCartQuantity} from '../store'
import ClickButton from './shared-components/ClickButton'
import locale from '../locale'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantitySelected: props.item.number
    }
  }

  _updateQuantityCount = event => {
    const {editCartQuantity, item} = this.props

    this.setState({
      quantitySelected: event.target.value
    })
    editCartQuantity(item.product.id, event.target.value)
  }

  render() {
    const {quantitySelected} = this.state
    const {editCartQuantity, deleteItemFromCart} = this.props
    return (
      <div>
        <div>{item.product.imageUrl}</div>
        <div>
          <div>{item.product.company}</div>
          <div>{item.product.name}</div>
        </div>
        <SelectDropDown
          className="quantity-dropdown"
          label={locale.QUANTITY}
          handleChange={this._updateQuantityCount}
          options={generateQuantityOptions()}
          value={quantitySelected}
        />

        <ClickButton buttonTitle={locale.REMOVE} />
      </div>
    )
  }
}
const CartItem = ({item, editCartQuantity, deleteItemFromCart}) => {
  return (
    <div>
      <div>{item.product.imageUrl}</div>
      <div>
        <div>{item.product.company}</div>
        <div>{item.product.name}</div>
      </div>
      <SelectDropDown
        className="quantity-dropdown"
        label={locale.QUANTITY}
        handleChange={this._selectQuantity}
        options={generateQuantityOptions()}
        value={quantitySelected}
      />
    </div>
  )
}

export default ClickButton
