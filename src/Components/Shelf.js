import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

function Shelf(props) {
  const {title, books} = props.shelf

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <BookList
        books={books}
        changeShelf={props.changeShelf}/>
    </div>
  )
}

Shelf.defaultProps = {
  shelf: {
    title: 'empty',
    books: []
  },
  changeShelf: () => {
  }
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Shelf
