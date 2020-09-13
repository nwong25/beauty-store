import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import locale from '../locale'
import ClickButton from './shared-components/ClickButton'

const AuthForm = ({name, displayName, handleSubmit, error}) => {
  return (
    <div className="center">
      <form onSubmit={handleSubmit} name={name}>
        <div className="block">
          <label className="center-text" htmlFor="email">
            {locale.EMAIL}
          </label>
          <input name="email" type="text" />
        </div>
        <div className="block">
          <label className="center-text" htmlFor="password">
            {locale.PASSWORD}
          </label>
          <input name="password" type="password" />
        </div>
        <div className="center margin-0">
          <ClickButton
            className="nav-button"
            buttonTitle={displayName}
            buttonType="submit"
          />
        </div>
        {error &&
          error.response && (
            <div className="error-message"> {error.response.data} </div>
          )}
      </form>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
