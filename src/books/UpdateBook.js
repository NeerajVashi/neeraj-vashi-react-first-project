import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateBook } from '../actions/libraryAction'
import Authenticate from '../authentication/authenticate';

class UpdateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:  props.location.state.currentData.id,
            author:  props.location.state.currentData.author,
            authorId:  props.location.state.currentData.authorId,
            bookName:  props.location.state.currentData.bookName,
            content:  props.location.state.currentData.content,
            images:  props.location.state.currentData.images,
            isbn:  props.location.state.currentData.isbn,
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit(event) {
        const newData = this.state;
        const newbookData ={}
        Object.keys(newData).forEach((keys) => {
            if (newData[keys] !== '')
            {
                newbookData[keys] = newData[keys];
            }
        }) 
        const id = this.state.id;
        this.props.dispatch(updateBook(id, newbookData))
        alert('Successfully Updated');
        event.preventDefault();
    }

    render() {
        const token = this.props.library.token;
        if (Object.keys(token).length > 0) { 
        return (
            <div>
                <form className="container mt-4" onSubmit={this.handleSubmit}>
                    <input id="id" placeholder="Enter bookid" value={this.state.id} onChange={e => this.change(e)} />
                    <br />
                    <input id="author" placeholder="Enter Author Name" value={this.state.author} onChange={e => this.change(e)} />
                    <br />
                    <input id="authorId" placeholder="Enter Author Id" value={this.state.authorId} onChange={e => this.change(e)} />
                    <br />
                    <input id="content" placeholder="Enter Content" value={this.state.content} onChange={e => this.change(e)} />
                    <br />
                    <input id="bookName" placeholder="Enter book Name" value={this.state.bookName} onChange={e => this.change(e)} />
                    <br />
                    <input id="images" placeholder="Enter image" value={this.state.images} onChange={e => this.change(e)} />
                    <br />
                    <input id="isbn" placeholder="Enter ISBN number" value={this.state.isbn} onChange={e => this.change(e)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } else {
        return(
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
  
  export default connect(mapStateToProps)(UpdateBook);