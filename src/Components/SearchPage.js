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
        const myBook = this.props.books.find(item => item.id === book.id)
        if (myBook) {
          book['shelf'] = myBook.shelf
        }
        return book
      })
    )
  }

  newQuery(books) {
    if (books && Array.isArray(books)) {
      const syncedBooks = this.syncBooks(books)
      this.setState({books: syncedBooks})
    } else {
      this.setState({books: []})
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
