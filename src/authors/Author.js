import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authenticate from '../authentication/authenticate';
import {connect} from 'react-redux'
class Author extends Component {
    constructor(props) {
        super(props);
        this.Delete = this.Delete.bind(this)
    }
    Delete() {
        this.props.deleteAuthor(this.props.author.authorId);
    }
    render() {
        const token = this.props.library.token;
        if (Object.keys(token).length > 0) {
            return (
                <tr>
                    <td>{this.props.author.authorId}</td>
                    <td>{this.props.author.authorImage}</td>
                    <td>{this.props.author.content}</td>
                    <td>{this.props.author.title}</td>
                    <td><Link to={{
                        pathname: '/updateAuthor',
                        state: {
                            currentData: this.props.author
                        }
                    }}>Update</Link></td>
                    <td><button onClick={this.Delete}>Delete</button></td>
                </tr>
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

export default connect(mapStateToProps)(Author);