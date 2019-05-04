import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfSelector from "./ShelfSelector"
import BookCover from "./BookCover"

class Book extends Component {
  constructor(props) {
    super()
    this.state = {
      shelf: props.book.shelf
    }
  }

  static defaultProps = {
    imageLinks: {thumbnail: 'http://i.imgur.com/J5LVHEL.jpg'}
  }
  static propTypes = {
    imageLinks: PropTypes.objectOf(PropTypes.string).isRequired,
    book: PropTypes.object.isRequired
  }


  componentDidUpdate(_, prevState) {
    if (prevState.shelf !== this.state.shelf) {
      const changeBook = this.props.book
      const shelf = this.state.shelf
      this.props.changeShelf(changeBook, shelf)
    }
  }

  render() {
    const book = this.props.book
    const {title, authors, imageLinks} = book
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover imageLinks={imageLinks} book={book}/>
            <ShelfSelector shelf={this.state.shelf} changed={value => this.setState({shelf: value})}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
