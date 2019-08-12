import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authenticate from '../authentication/authenticate';
import {connect} from 'react-redux'

class Book extends Component {
    constructor(props) {
        super(props);

        this.Delete = this.Delete.bind(this)
    }
    Delete() {
        this.props.deleteBook(this.props.items.id);
    }
    render() {
        const token = this.props.library.token;
        if (Object.keys(token).length > 0) {
            return (
                <tr>
                    <th scope="row">{this.props.items.id}</th>
                    <td>{this.props.items.author}</td>
                    <td>{this.props.items.bookName}</td>
                    <td>{this.props.items.content}</td>
                    <td>{this.props.items.images}</td>
                    <td>{this.props.items.isbn}</td>
                    <td>{this.props.items.authorId}</td>
                    <td><Link to={{
                        pathname: '/updateBook',
                        state: {
                            currentData: this.props.items
                        }
                    }}>Update</Link></td>
                    <td value="yes"><button onClick={this.Delete}>Delete</button></td>
                </tr>
            )
        } else {
            return (
                <Authenticate />)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        library: state.library,
    };
}

export default connect(mapStateToProps)(Book);