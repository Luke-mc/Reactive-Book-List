import React, { Component } from 'react';
import './App.css';
import {getBooksFromFakeXHR} from '../../lib/books.db.js';
import {addBookToFakeXHR}  from '../../lib/books.db.js';
import BookList from '../BookList/index';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import NewBookForm from '../NewBookForm/index';
import BookFilterInput from '../../components/BookFilterInput.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      books:[],
      filter:""
    };
  }

  componentWillMount() {
    getBooksFromFakeXHR()
      .then(books => {
        this.setState(
          {books}
        );
    });
  }

  addBook(book){
    addBookToFakeXHR(book)
      .then(books => {
          this.setState({books});
      });
  }

  setFilter(e){
    let input = e.target.value;
    this.setState({filter:input});
    console.log(input);
  }

  render() {
    console.log(this.state);
      return (
        <div id= "main-container">
          <div className="book-main-title">
            <BookListAppTitle
            title = "Title"/>
          </div>
            <br/>
              <BookFilterInput
              setFilter = {this.setFilter.bind(this)}/>
            <br/>
              <BookList
              books = {this.state.books}
              filter = {this.state.filter}/>
           <br/>
              <NewBookForm
              addBook = {this.addBook.bind(this)}/>
           <br/>
        </div>
      );
   }
}


export default App;
