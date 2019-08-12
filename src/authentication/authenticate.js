import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class Authenticate extends Component {
    render() {
        const token = this.props.library.token;
        console.log('token', token, 'token length', token.length);
        if(Object.keys(token).length > 0) {
                return (
                    <Login msg = {token.msg} status = {token.status} token = {token}/>
                )
        } else {
            return (
                <Login msg = {''} status = {false} token = {token}/>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        library: state.library,
    };
}

export default connect(mapStateToProps)(Authenticate);
