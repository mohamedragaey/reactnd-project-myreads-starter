import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import Book from './Components/Book'
import SearchButton from './Components/SearchButton'
import SearchPage from './Components/SearchPage'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({books}))
        console.log(books)
      })
  }

  render() {
    let {books} = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (<div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book => (
                      <Book
                        key={book.id}
                        book={book}
                      />
                    ))}
                  </ol>

                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book => (
                      <Book
                        key={book.id}
                        book={book}
                      />
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book => (
                      <Book
                        key={book.id}
                        book={book}
                      />
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <SearchButton/>
        </div>)}/>
        <Route path='/search' render={() => (<SearchPage/>)}/>
      </div>
    )
  }
}

export default BooksApp
