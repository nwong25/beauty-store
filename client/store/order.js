import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS = 'GET_ALL_PRODUCTS'
const POST_ORDER = 'POST_ORDER'

/**
 * INITIAL STATE
 */
const initialState = {
  orders: []
}

/**
 * ACTION CREATORS
 */
export const getOrders = orders => ({
  type: GET_ALL_ORDERS,
  orders
})

export const postOrder = order => ({
  type: POST_ORDER,
  order
})

/**
 * THUNK CREATORS
 */

export const fetchOrders = () => async dispatch => {
  try {
    const response = await axios.get('/api/users/orders')
    const orders = response.data
    const action = getOrders(orders)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const addOrder = order => async dispatch => {
  try {
    const response = await axios.post('/api/products/cart/checkout', order)
    const orderInfo = response.data
    // dispatch(postOrder(order))
  } catch (error) {
    console.log(error)
  }
}

//when we hit button for add to cart
//add the item to cart session store
//add the updated cart to the session store
/**
 * REDUCER
 */
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {...state, orders: action.orders}
    case POST_ORDER:
      return {...state, orders: [...state.orders, ...action.order]}
    default:
      return state
  }
}
