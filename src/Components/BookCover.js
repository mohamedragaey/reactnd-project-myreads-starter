import React from 'react'
import PropTypes from 'prop-types'

function BookCover(props) {
  const {imageLinks, book} = props
  const {title} = book

  return (
    <div className="book-cover">
      <img src={imageLinks.thumbnail} alt={title}/>
    </div>
  )
}

BookCover.defaultProps = {
  imageLinks: {thumbnail: 'http://i.imgur.com/J5LVHEL.jpg'}
}

BookCover.propTypes = {
  imageLinks: PropTypes.objectOf(PropTypes.string).isRequired,
  book: PropTypes.object.isRequired
}

export default BookCover