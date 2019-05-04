import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BooksList(props) {
  const {books, changeShelf} = props
  return (
    <div className='bookshelf-books'>
      <ol className="books-grid">
        {books.map(book => (
          <Book
            key={book.id}
            book={book}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}
BooksList.defaultProps = {
  books: [],
  changeShelf: () => {
  }
}

export default BooksList
