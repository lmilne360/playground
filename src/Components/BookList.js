import React, { Component } from "react";
import Book from "./Book";
import JwPagination from "jw-react-pagination";

import { Link } from "react-router";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      exampleItems: this.props.books,
      pageOfItems: []
    };
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <ul className="book-list">
          {this.state.pageOfItems.map((book, index) => (
            <li key={index}>
              <Book item={book} />
            </li>
          ))}
        </ul>
        <JwPagination
          items={this.props.books}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}
