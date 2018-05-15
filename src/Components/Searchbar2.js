import React, { Component } from "react";
import BookList from "./BookList";

const url = "http://localhost:4000/books";

export default class Searchbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", books: [], isloading: true };
    this.getBooks = this.getBooks.bind(this);
    this.getBooks();
  }

  getBooks(event) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ books: data, isloading: false });
      });
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search, isloading } = this.state;
    const filterBooks = this.state.books.filter(book => {
      return book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if(isloading) {
        return <p>Loading...</p>
    }

    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.searchBooks}>
            <input
              onChange={this.onChange}
              type="text"
              id="searchbar-input"
              placeholder="Search books..."
            />
          </form>
        </div>
        {<BookList books={filterBooks} />}
      </div>
    );
  }
}
