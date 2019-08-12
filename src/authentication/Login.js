import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions/libraryAction'
import Logout from './Logout'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.loginUser = this.loginUser.bind(this);
    }
    changeState = e => {
        this.setState( {
            [e.target.id]:e.target.value
        })
    }
    loginUser = (event) => {
        event.preventDefault();
        if(this.props.status) {
            this.props.dispatch(logout())
        } else {
        this.props.dispatch(login(this.state));
        }

    }
    render() {
        console.log('msg', this.props.msg, 'token',this.props.token);
            return (
                <div className = 'container'>
                    <form className='form' onSubmit = {this.loginUser}>
                      <input id='username' placeholder='Enter you email' value={this.state.username} onChange = { e => this.changeState(e) } /> <br />
                      <input type='password' id = 'password' placeholder = 'Enter you password' value={this.state.password} onChange = { e => this.changeState(e) } /> <br />
                      {/* <input type = 'submit' value='submit' />
                      <div>{this.props.msg}</div> */}
                      <Logout status = {this.props.status} msg = {this.props.msg}/>
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

export default connect(mapStateToProps)(Login);