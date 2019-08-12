import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateAuthor} from '../actions/libraryAction'
import Authenticate from '../authentication/authenticate';

class UpdateAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          authorId: props.location.state.currentData.authorId,																																																																																	
          title: props.location.state.currentData.title,
          authorImage: props.location.state.currentData.authorImage,
          content: props.location.state.currentData.content
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
      change = e => {
        this.setState( {
          [e.target.id]:e.target.value
        })
      }
      handleSubmit(event) {
        const newData = this.state;
        let newauthordata = {}
        Object.keys(newData).forEach((keys) => {
          if (newData[keys] !=='') {
            newauthordata[keys] = newData[keys];
          }
        })
        const id = this.state.authorId;
        updateAuthor(id, newauthordata);
        this.props.dispatch(updateAuthor(id, newauthordata));
        alert('Successfully Updated');
        event.preventDefault();
      }
 
    render() {
      const token = this.props.library.token;
      if (Object.keys(token).length > 0) {
        return (
            <form className="container mt-4" onSubmit={this.handleSubmit}>
                <input id="authorId" placeholder="Enter Author Id" value={this.state.authorId} onChange={e => this.change(e)} />
                <br />
                <input id="title" placeholder="Enter Author Name" value={this.state.title} onChange={e => this.change(e)} />
                <br />
                <input id="authorImage" placeholder="Enter Author Image" value={this.state.authorImage} onChange={e => this.change(e)} />
                <br />
                <input id="content" placeholder="Enter Content" value={this.state.content} onChange={e => this.change(e)} />
                <br />
                <input type="submit" value="Submit" />
            </form>
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

export default connect(mapStateToProps)(UpdateAuthor);
