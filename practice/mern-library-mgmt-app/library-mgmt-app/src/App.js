import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import BooksList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreatePublisher from "./components/create-publisher.component";
import CreateAuthor from "./components/create-author.component";
import AdminLogin from "./components/admin/admin-login.component";
import AdminHome from "./components/admin/admin-home.component";
import AdminError from "./components/admin/admin-error.component";
import EditUser from "./components/admin/edit-user.component";
import CreateUser from "./components/admin/create-user.component";
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
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/error" component={AdminError} />
        <Route path="/admin/home" component={AdminHome} />
        <Route path="/admin/users/edit/:id" component={EditUser} />
        <Route path="/admin/users/create" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
