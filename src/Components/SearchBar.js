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
    // Input value changed and it is not empty
    if (prevState.query !== this.state.query && this.state.query !== '') {

      this.setState({typing: true})
      // Use API to search for value
      BooksAPI.search(this.state.query)
        .then(results => (this.props.newQuery(results)))
        .catch()
    }

    // Input value changed and is empty
    if (prevState.query !== this.state.query && this.state.query === '') {
      this.setState({typing: false})                         // Hide clear button
      this.props.newQuery(null)                              // Push up nothing to clear
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
