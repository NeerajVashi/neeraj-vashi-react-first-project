import Author from './Author'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { showAuthors, deleteAuthor } from '../actions/libraryAction'
import Authenticate from '../authentication/authenticate'

class Authors extends Component {
    constructor(props) {
        super(props.Book);
        this.deleteAuthor = this.deleteAuthor.bind(this);
    }
    componentDidMount() {
        console.log('Authors=', this.props.library.authors);
        this.props.dispatch(showAuthors());
    }
    deleteAuthor = async (id) => {
        this.props.dispatch(deleteAuthor(id))
    }
    render() {
        const Authors = this.props.library.authors;
        const token = this.props.library.token;
        if (Object.keys(token).length > 0) {
            return (
                <div>
                    <table className="table container">
                        <thead className="thead-dark">
                            <tr>
                                <th>AuthorId</th>
                                <th>AuthorImage</th>
                                <th>Content</th>
                                <th>Title</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th><Link to='/addAuthor'>Add Author</Link></th>
                            </tr>
                        </thead>
                        <thead>
                            {Authors.map((items, index) => (
                                <Author author={items} key={index} deleteAuthor={this.deleteAuthor} />
                            ))}
                        </thead>
                    </table>
                </div>
            )
        } else {
            return (<Authenticate />)

        }
    }
}

const mapStateToProps = (state) => {
    return {
        library: state.library
    };
}

export default connect(mapStateToProps)(Authors);