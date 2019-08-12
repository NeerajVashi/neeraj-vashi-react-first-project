import React from 'react'
import Navigation from './Nav.js'
import Books from './books/Books'
import Authors from './authors/Authors'
import AddAuthor from './authors/AddAuthor'
import UpdateAuthor from './authors/UpdateAuthor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddBook from './books/AddBook';
import UpdateBook from './books/UpdateBook';
import Register from './authentication/Register';
// import Login from './authentication/Login';
import Authenticate from './authentication/authenticate'
// import authenticate from './authentication/authenticate';

class Home extends React.Component {
    render () {
        return (
            <Router>
                    <Navigation  />
                    <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/authors' component={Authors} />
                    <Route path='/books' component={Books} />
                    <Route path='/addAuthor' component={AddAuthor} />
                    <Route path='/updateAuthor' component = { UpdateAuthor } />
                    <Route path='/AddBook' component = { AddBook} />
                    <Route path='/updateBook' component = { UpdateBook } />
                    <Route path='/register' component = { Register } />
                    <Route path='/login' component = { Authenticate } />
                    </Switch>
            </Router>
        )
    }
}

const HomePage = () => (
    <div>
        <h1>You are in Home</h1>
    </div>
);












export default Home;