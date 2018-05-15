import React, { Component } from "react";
import BookList from "./BookList";
import Fuse from "fuse.js";

const url = "http://localhost:4000/books";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.searchBooks();
    this.searchBooks = this.searchBooks.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
  }

  searchBooks(event) {
    // event.preventDefault();
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ books: data, filteredBooks: data });
      });
  }

  filterBooks(event) {
    let updatedList = this.state.books;
    updatedList = updatedList.filter(book => {
      return (
        book.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredBooks: updatedList });
  }

  render() {

    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.searchBooks}>
            <input
            onChange={this.filterBooks}
             value={this.state.text}
              type="text"
              id="searchbar-input"
              placeholder="Search books..."
            />
          </form>
        </div>

        {/* <button onClick={this.searchBooks}>Search Books </button> */}
        {this.state.books && <BookList books={this.state.filteredBooks} />}
      </div>
    );
  }
}

export default Searchbar;
