import React, {Component} from 'react';

class NewBookForm extends Component{
  constructor(props){
    super(props);

     this.setState({
      bookTitle: '',
      bookAuthor:''
    });
  }

handleTitleChange(e) {
  this.setState({
      bookTitle: e.target.value,
    });
}

handleAuthorChange (e) {
    this.setState({
      bookAuthor: e.target.value,
    });
}

handleBookSubmit() {
  let newBook = {
    title: this.state.bookTitle,
    author: this.state.bookAuthor
  };

  this.props.addBook(newBook);
}

  render() {
    return(
    <div className="book-form">
      <strong>Add New</strong>
    <br/>
    <input
     type="text"
     name= "title"
     placeholder="Book Title"
     onChange={this.handleTitleChange.bind(this)}/>
    <br/>
    <input
    type="text"
    name= "year"
    placeholder="Book Author"
    onChange= {this.handleAuthorChange.bind(this)}/>
    <br/>
      <button onClick={this.handleBookSubmit.bind(this)}>Submit Book Title</button>
   </div>

   );
  }
}

export default NewBookForm;