import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchFilteredProducts} from '../store/product'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  _handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handleSubmit = event => {
    const {fetchFilteredProducts, history} = this.props
    event.preventDefault()

    fetchFilteredProducts(this.state.searchInput)

    this.setState({
      searchInput: ''
    })
    history.push(`/products?search=${this.state.searchInput.toLowerCase()}`)
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="center">
        <form id="search-bar" className="center" onSubmit={this._handleSubmit}>
          <div className="search-bar-form">
            <input
              type="text"
              name="searchInput"
              value={searchInput}
              onChange={this._handleChange}
              placeholder="Search Here"
            />
          </div>
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchInput: state.searchInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFilteredProducts: searchTerm =>
      dispatch(fetchFilteredProducts(searchTerm))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
)
