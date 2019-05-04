import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      typing: false
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query && this.state.query !== '') {
      this.setState({typing: true})
      BooksAPI.search(this.state.query)
        .then(results => (this.props.newQuery(results)))
        .catch()
    }
    if (prevState.query !== this.state.query && this.state.query === '') {
      this.setState({typing: false})
      this.props.newQuery(null)
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <form className="search-books-form">
              <input
                value={this.state.query}
                type="search"
                placeholder="Search by title or author"
                onChange={evt => (this.setState({query: evt.target.value}))}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
