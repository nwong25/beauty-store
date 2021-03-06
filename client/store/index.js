import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {productReducer} from './product'
import {orderReducer} from './order'

const reducer = combineReducers({
  user,
  products: productReducer,
  orders: orderReducer
})

let middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )
}

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './user'
export * from './order'
