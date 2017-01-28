import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookList from '../containers/book-list';
import ActiveBook from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <ActiveBook/>
      </div>
    );  
  }
}
