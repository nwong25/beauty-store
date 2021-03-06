import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const POST_ORDER = 'POST_ORDER'

/**
 * INITIAL STATE
 */
const initialState = []

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
    const response = await axios.get('/api/orders')
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
    dispatch(postOrder(order))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {...action.orders}
    case POST_ORDER:
      return {...state, ...action.order}
    default:
      return state
  }
}
