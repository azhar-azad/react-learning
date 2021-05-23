import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login.component";
import Logout from "./components/logout.component";
import Error from "./components/error.component";
import Navbar from "./components/navbar/navbar.component";
import BooksList from "./components/book/books-list.component";
import CreateBook from "./components/book/create-book.component";
import EditBook from "./components/book/edit-book.component";
import PublishersList from "./components/publisher/publishers-list.component";
import CreatePublisher from "./components/publisher/create-publisher.component";
import EditPublisher from "./components/publisher/edit-publisher.component";
import AuthorsList from "./components/author/authors-list.component";
import CreateAuthor from "./components/author/create-author.component";
import EditAuthor from "./components/author/edit-author.component";
import RegisterUser from "./components/user/register-user.component";
import EditUser from "./components/user/edit-user.component";
import AdminHome from "./components/admin/admin-home.component";
import AdminEditUser from "./components/admin/admin-edit-user.component";

import './App.css';
import {authServices} from "./services/authentication.service";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isAdmin: false
    }
  }

  componentDidMount() {
    if (authServices.isLoggedIn()) {
      this.setState({
        isLoggedIn: true
      });
    }
    else {
      this.setState({
        isLoggedIn: false
      });
    }

    if (authServices.isAdmin()) {
      this.setState({
        isAdmin: true
      });
    }
    else {
      this.setState({
        isAdmin: false
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>

          {/* all users can access those two routes */}
          <Route path="/login" exact component={Login} />
          <Route path="/users/create" exact component={RegisterUser} />
          <Route path="/error" component={Error} />
          {
            this.state.isLoggedIn ? (
              // for logged in users
              <div>
                <Route path="/" exact component={BooksList} />
                <Route path="/logout" exact component={Logout} />

                <Route path="/books" exact component={BooksList} />
                <Route path="/books/create" exact component={CreateBook} />
                <Route path="/books/edit/:id" exact component={EditBook} />

                <Route path="/authors" exact component={AuthorsList} />
                <Route path="/authors/create" exact component={CreateAuthor} />
                <Route path="/authors/edit/:id" exact component={EditAuthor} />

                <Route path="/publishers" exact component={ PublishersList } />
                <Route path="/publishers/create" exact component={CreatePublisher} />
                <Route path="/publishers/edit/:id" exact component={EditPublisher} />

                <Route path="/users/edit/:id" exact component={EditUser} />
                {
                  this.state.isAdmin ? (
                    // for admins
                    <div>
                      <Route path="/admin/home" exact component={AdminHome} />
                      <Route path="/admin/users/edit/:id" exact component={AdminEditUser} />
                    </div>
                  ) : (
                    // for non-admins
                    <div>
                      <Route path="/admin" component={Login} />
                    </div>
                  )
                }
              </div>
            ) : (
              // for logged out users
              <div>
                <Route path="/" exact component={Login} />
              </div>
            )
          }
        </div>
      </Router>
    );
  }
}

export default App;
