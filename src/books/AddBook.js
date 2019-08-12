import React, { Component } from 'react'
import { addBooks } from '../actions/libraryAction'
import { connect } from 'react-redux'
import Authenticate from '../authentication/authenticate'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
          author: '',
          authorId: '',
          bookName: '',
          content: '',
          images: '',
          isbn: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      change = e => {
        this.setState( {
          [e.target.id]:e.target.value
        })
      }
      async handleSubmit(event) {
      event.preventDefault();
      const newbookData = JSON.stringify(this.state);
      this.props.dispatch(addBooks(newbookData))
      alert('New book successfully inserted');
 
      }
 
    render() {
      const token = this.props.library.token;
      if (Object.keys(token).length > 0) {
        return (
            <div>   
                <form className="container mt-4" onSubmit={this.handleSubmit}>
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

export default connect(mapStateToProps)(AddBook);