import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import BookShelf from "./Components/BookShelf"
import NoMatch from './Components/NoMatch'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({books}))
      })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.books.length !== this.state.books.length) {
      BooksAPI.getAll()
        .then(books => this.setState({books}))
    }
  }

  changeShelf(changeBook, newValue) {
    BooksAPI.update(changeBook, newValue)
      .then(
        // Update state
        this.setState(prevState => {
          let books = []
          // Book to change was not in the previous state
          if (!prevState.books.includes(changeBook)) {
            changeBook['shelf'] = newValue
            books.concat(prevState.books).push(changeBook)
          } else {
            books = prevState.books.map(book => {
              if (book === changeBook) {
                book.shelf = newValue
                return book
              } else {
                return book
              }
            })
          }
          return {books}
        }))

  }

  putBooksOnShelf(books) {

    //Separate the books by shelf listed
    const booksReading = books.filter(book => book.shelf === 'currentlyReading')
    const booksWant = books.filter(book => book.shelf === 'wantToRead')
    const booksRead = books.filter(book => book.shelf === 'read')


    return [
      {
        title: 'Currently Reading',
        books: booksReading
      },
      {
        title: 'Want to Read',
        books: booksWant
      },
      {
        title: 'Read',
        books: booksRead
      }
    ]
  }

  render() {
    let shelves = this.putBooksOnShelf(this.state.books)
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (<BookShelf shelves={shelves}
                                                          changeShelf={(changeBook, newValue) => (this.changeShelf(changeBook, newValue))}/>)}/>
          <Route path='/search' render={() => (<SearchPage books={this.state.books} changeShelf={
            (changeBook, newValue) => (this.changeShelf(changeBook, newValue))
          }/>)}/>
          <Route component={NoMatch}/>
        </Switch>

      </div>
    )
  }
}

export default BooksApp
