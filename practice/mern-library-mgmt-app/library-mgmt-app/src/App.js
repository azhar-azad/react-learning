import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreatePublisher from "./components/create-publisher.component";
import CreateAuthor from "./components/create-author.component";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BooksList} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
        <Route path="/publishers/create" component={CreatePublisher} />
        <Route path="/authors/create" component={CreateAuthor} />
      </div>
    </Router>
  );
}

export default App;
