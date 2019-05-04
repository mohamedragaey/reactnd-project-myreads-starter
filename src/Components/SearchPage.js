import React, {Component} from 'react'
import SearchBar from "./SearchBar"
import BooksList from "./BookList"

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  syncBooks(queryBooks) {
    return (
      queryBooks.map(book => {

        // Check if book matches any on main page
        const myBook = this.props.books.find(item => item.id === book.id)

        // Match found
        if (myBook) {
          book['shelf'] = myBook.shelf // Add shelf propery to match main page value
        }

        return book  // Push book into results
      })
    )
  }

  newQuery(books) {

    // Defined results in array format
    if (books && Array.isArray(books)) {

      const syncedBooks = this.syncBooks(books)
      this.setState({books: syncedBooks})     // Change state to results
    } else {
      this.setState({books: []}) // Clear state
    }
  }

  render() {
    const books = this.state.books
    return (
      <div className="search-books">
        <SearchBar newQuery={(book) => (this.newQuery(book))}/>
        <div className="search-books-results">
          <BooksList books={books} changeShelf={this.props.changeShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchPage
