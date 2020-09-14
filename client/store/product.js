import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const SELECT_PRODUCT = 'SELECT_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const SEARCH_PRODUCTS = 'SEARCH_PRODUCT'
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const EDIT_CART_QUANTITY = 'EDIT_CART_QUANTITY'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const GET_PRODUCT_FILTERED_BY_CATEGORY = 'GET_PRODUCT_FILTERED_BY_CATEGORY'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  selectedProduct: {},
  cart: [],
  searchInput: ''
}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const selectProd = product => ({
  type: SELECT_PRODUCT,
  product: product
})

export const addCartItem = item => ({
  type: ADD_TO_CART,
  item
})

export const searchProducts = (title, products) => ({
  type: SEARCH_PRODUCTS,
  title,
  products
})

export const gotCart = cart => ({
  type: GET_CART,
  cart
})

export const clearCart = () => ({
  type: CLEAR_CART,
  cart: []
})

export const editCartQuantity = (id, quantity) => ({
  type: EDIT_CART_QUANTITY,
  id,
  quantity
})

export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  id
})

export const filteredProductByCategory = products => ({
  type: GET_PRODUCT_FILTERED_BY_CATEGORY,
  products
})

/**
 * THUNK CREATORS
 */

export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('/api/products')
    const products = response.data
    const action = getProducts(products)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const fetchFilteredProducts = searchTerm => async dispatch => {
  try {
    const response = await axios.get(`/api/products?search=${searchTerm}`)
    const filteredResults = response.data
    const action = searchProducts(searchTerm, filteredResults)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const fetchCategoryProducts = category => async dispatch => {
  try {
    const response = await axios.get(`/api/products?category=${category}`)
    const filteredResults = response.data
    const action = filteredProductByCategory(filteredResults)
    dispatch(action)
  } catch (error) {
    console.log(error)
  }
}

export const addProduct = product => async dispatch => {
  try {
    const {data: added} = await axios.post('/api/products', product)
    dispatch(postProduct(added))
  } catch (error) {
    console.error(error)
  }
}

export const selectProductById = id => async dispatch => {
  try {
    const {data: product} = await axios.get(`/api/products/${id}`)
    dispatch(selectProd(product))
  } catch (err) {
    console.error(err)
  }
}

export const postToCart = cart => async dispatch => {
  try {
    await axios.post('/api/products/cart', cart)
  } catch (err) {
    console.error(err)
  }
}

export const getCart = () => async dispatch => {
  try {
    const {data: cart} = await axios.get('/api/products/cart')
    dispatch(gotCart(cart))
  } catch (err) {
    console.error(err)
  }
}

export const clearTheCart = () => async dispatch => {
  try {
    const response = await axios.put('/api/products/cart/checkout')
    dispatch(clearCart())
  } catch (err) {
    console.error(err)
  }
}

export const updateInventory = cartItems => async dispatch => {
  try {
    const response = await axios.put('/api/products/cart/checkout')
    const {data} = response
    const action = getProducts(data)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

export const deleteItemFromCart = id => async dispatch => {
  try {
    const response = await axios.delete(`/api/products/cart/${id}`)
    const action = deleteFromCart(id)
    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

export const updateQuantity = (id, quantity) => async dispatch => {
  try {
    const {data: updateItem} = await axios.put('/api/products/cart', quantity)
    dispatch(editCartQuantity(id, updateItem))
  } catch (err) {
    console.log(err)
  }
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case SELECT_PRODUCT:
      return {...state, selectedProduct: action.product}
    case ADD_TO_CART:
      let currentCart = [...state.cart]
      let newProduct = true
      currentCart.map(currentCartItem => {
        if (currentCartItem.product.id === action.item.product.id) {
          currentCartItem.number += action.item.number
          newProduct = false
        }
      })
      if (newProduct) {
        return {...state, cart: [...currentCart, action.item]}
      } else {
        return {...state, cart: [...currentCart]}
      }
    case EDIT_CART_QUANTITY:
      const updateCartInfo = state.cart.map(item => {
        if (item.product.id === action.id) {
          item.number = action.quantity
          return item
        } else {
          return item
        }
      })
      return {...state, cart: updateCartInfo}
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchInput: action.title,
        products: action.products
      }
    case GET_PRODUCT_FILTERED_BY_CATEGORY: {
      return {
        ...state,
        products: action.products
      }
    }
    case GET_CART:
      return {...state, cart: [...action.cart]}
    case CLEAR_CART:
      return {...state, cart: []}
    case DELETE_FROM_CART:
      const newCart = state.cart.filter(item => item.product.id !== action.id)
      return {...state, cart: newCart}
    default:
      return state
  }
}
