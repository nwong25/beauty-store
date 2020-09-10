import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ALL_PROD_ADMIN = 'GET_ALL_PROD_ADMIN'
const POST_PRODUCT = 'POST_PRODUCT'
const PUT_PRODUCT = 'PUT_PRODUCT'
const SELECT_PRODUCT = 'SELECT_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const SEARCH_PRODUCTS = 'SEARCH_PRODUCT'
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const UPDATE_INVENTORY_AFTER_CART = 'UPDATE_INVENTORY_AFTER_CART'
const POST_REVIEW = 'POST_REVIEW'
const EDIT_CART_QUANTITY = 'EDIT_CART_QUANTITY'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const EDIT_CART_PRICE = 'EDIT_CART_PRICE'
const EDIT_CART_PROMO = 'EDIT_CART_PROMO'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  selectedProduct: {},
  cart: [],
  searchInput: '',
  reviews: []
}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products
})

const getProdAdmin = products => ({
  type: GET_ALL_PROD_ADMIN,
  products
})

const postProduct = product => ({
  type: POST_PRODUCT,
  product
})

const putProduct = product => ({
  type: PUT_PRODUCT,
  product
})

const selectProd = product => ({
  type: SELECT_PRODUCT,
  product: product
})

export const addCartItem = item => ({
  type: ADD_TO_CART,
  item
})

export const searchProducts = title => ({
  type: SEARCH_PRODUCTS,
  title
})

export const gotCart = cart => ({
  type: GET_CART,
  cart
})

export const clearCart = () => ({
  type: CLEAR_CART,
  cart: []
})

export const updateInventoryAfterCart = cartItems => ({
  type: UPDATE_INVENTORY_AFTER_CART,
  cartItems
})

export const postAReview = review => ({
  type: POST_REVIEW,
  review
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

export const editCartPrice = (id, price) => ({
  type: EDIT_CART_PRICE,
  id,
  price
})

export const editCartPromo = (id, promo) => ({
  type: EDIT_CART_PROMO,
  id,
  promo
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

export const fetchProdAdmin = () => async dispatch => {
  try {
    const response = await axios.get('/api/products')
    const products = response.data
    const action = getProdAdmin(products)
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

export const editProduct = (id, product) => async dispatch => {
  try {
    const {data: edited} = await axios.put(`/api/products/${id}`, product)
    dispatch(putProduct(edited))
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

export const postReview = (id, reviews) => async dispatch => {
  try {
    const {data: review} = await axios.post(`/api/products/${id}`, reviews)
    dispatch(postAReview(review))
  } catch (err) {
    console.error(err)
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

export const updatePrice = (id, price) => async dispatch => {
  try {
    const {data: updateCartItem} = await axios.put('/api/products/cart', price)
    dispatch(editCartPrice(id, updateCartItem))
  } catch (err) {
    console.error(err)
  }
}

export const updatePromo = (id, promo) => async dispatch => {
  try {
    const {data: updatedPromo} = await axios.put('/api/products/cart', promo)
    dispatch(editCartPromo(id, updatedPromo))
  } catch (err) {
    console.error(err)
  }
}
//when we hit button for add to cart
//add the item to cart session store
//add the updated cart to the session store
/**
 * REDUCER
 */
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case GET_ALL_PROD_ADMIN:
      const filteredProducts = action.products.filter(
        product => product.inventory > 0
      )
      return {...state, products: filteredProducts}
    case POST_PRODUCT:
      return {...state, products: [...state.products, action.product]}
    case PUT_PRODUCT:
      const productUpdated = state.products.map(
        product =>
          product !== action.product ? product : {...product, ...action.product}
      )
      return {...state, products: productUpdated}
    case SELECT_PRODUCT:
      return {...state, selectedProduct: action.product}
    case ADD_TO_CART:
      let cartCopy = [...state.cart]
      let newProduct = true
      cartCopy.map(elem => {
        if (elem.product.id === action.item.product.id) {
          elem.number += action.item.number
          newProduct = false
        }
      })
      if (newProduct) {
        return {...state, cart: [...cartCopy, action.item]}
      } else {
        return {...state, cart: [...cartCopy]}
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
    case EDIT_CART_PROMO:
      const updateCartPromoInfo = state.cart.map(item => {
        if (item.product.id === action.id) {
          item.product.promo = action.promo
          return item
        } else {
          return item
        }
      })
      return {...state, cart: updateCartPromoInfo}

    case SEARCH_PRODUCTS:
      return {...state, searchInput: action.title}

    case GET_CART:
      return {...state, cart: [...action.cart]}
    case CLEAR_CART:
      return {...state, cart: []}
    case UPDATE_INVENTORY_AFTER_CART:
      const inventoryChange = state.products.map(product => {
        action.cartItems.map(cartItem => {
          if (cartItem.product.id === product.id) {
            product.inventory = product.inventory - cartItem.number
          }
        })
        return singleProduct
      })
      return {...state, products: inventoryChange}
    case POST_REVIEW:
      return {...state, reviews: [...state.reviews, action.review]}
    case DELETE_FROM_CART:
      const newCart = state.cart.filter(item => item.product.id !== action.id)
      return {...state, cart: newCart}
    default:
      return state
  }
}
