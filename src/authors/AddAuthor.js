import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAuthors } from '../actions/libraryAction'

class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          authorImage: '',
          content: ''
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
        const newauthordata = JSON.stringify(this.state);
        this.props.dispatch(addAuthors(newauthordata))
          alert('successfully inserted');
      }
    
    render() {
        return (
            <div>
                <form className="container mt-4" onSubmit={this.handleSubmit}>
                    <input id="title" placeholder="Enter Author Name" value={this.state.title} onChange={this.change} />
                    <br />
                    <input id="authorImage" placeholder="Enter Author Image" value={this.state.authorImage} onChange={this.change} />
                    <br />
                    <input id="content" placeholder="Enter Content" value={this.state.content} onChange={this.change} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      library: state.library,
  };
}

export default connect(mapStateToProps)(AddAuthor);