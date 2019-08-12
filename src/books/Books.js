import Book from './Book'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showBooks, deleteBook } from '../actions/libraryAction'
import Authenticate from '../authentication/authenticate'

import React, { Component } from 'react'

class Books extends Component {
    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(showBooks());
    }
    deleteBook = async (id) => {
        this.props.dispatch(deleteBook(id))
    }
    render() {
        const books = this.props.library.books;
        const token = this.props.library.token;
        if (Object.keys(token).length > 0) {
            return (
                <div>
                    <table className="table container">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Author </th>
                                <th scope="col">BookName</th>
                                <th scope="col">Content</th>
                                <th scope="col">Image</th>
                                <th scope="col">ISBN</th>
                                <th scope="col">AuthorId</th>
                                <th scope="col">UPDATE</th>
                                <th scope="col">DELETE</th>
                                <th><Link to='/AddBook'>Add Book</Link></th>
                            </tr>
                        </thead>
                        <thead>
                            {books.map((items, index) => (
                                <Book items={items} key={index} deleteBook={this.deleteBook} />
                            ))}
                        </thead>
                    </table>

                </div>
            )
        } else {
            return (
                <Authenticate />
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        library: state.library,
    };
}

export default connect(mapStateToProps)(Books);