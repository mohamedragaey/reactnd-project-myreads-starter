import React from 'react'
import PropTypes from 'prop-types'
import SearchButton from './SearchButton'
import Shelf from "./Shelf"

function BookShelf(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div>
            {props.shelves.map(shelf => <Shelf key={shelf.title} shelf={shelf} changeShelf={props.changeShelf}/>)}
          </div>
        </div>
      </div>
      <SearchButton/>
    </div>
  )
}

BookShelf.defaultProps = {
  shelves: [
    {title: "Currently Reading", books: []},
    {title: "Want to Read", books: []},
    {title: "Read", books: []}
  ],
  changeShelf: () => {
  }
}

BookShelf.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object)
  })).isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf
