import React from 'react'

function Book(props) {
  let {title, authors, imageLinks} = props.book
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover">
            <img src={imageLinks.thumbnail} alt={title}/>
          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default Book