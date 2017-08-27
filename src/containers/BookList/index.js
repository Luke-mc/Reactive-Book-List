import React, { Component } from 'react';
import Book from '../../components/Books';

class BookList extends Component {

    render() {
        return (
          <ul>
              {
                this.props.books
                  .filter(({title, author}) => {
                      if(title.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0 ||
                      author.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
                      {
                        return {title:title,author:author

                        }
                      }
                  })
                  .map(({title,author}) => {
                    return(
                      <Book
                      title = {title}
                      author = {author}
                      />
                    )
                 })
               }
         </ul>
        )
     }
}

export default BookList