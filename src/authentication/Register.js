import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phone: '',
            email: ''
        }
        this.storeNewUser = this.storeNewUser.bind(this);
    }
    
    changeState = e => {
        this.setState( {
            [e.target.id]:e.target.value
        })
    }

    storeNewUser(event) {
        console.log('newuser', this.state);
        const registerRequest = 'https://auth-01.herokuapp.com/registration';
        fetch(registerRequest, {
            headers: {
                Accept:'application/json',
                'Content-type': 'application/json',
            },
            method:'post',
            body: JSON.stringify(this.state),
        }).then(response => response.json())
        .then((isRegister) => {
            console.log('isRegister', isRegister)
            if(isRegister.status){
                alert('success'+ isRegister.msg)
            } else {
                alert('error'+ isRegister.msg)
            }

        })
        event.preventDefault();
    }

    render() {
        return (
            <div className = 'container'>
                <form className = 'form' onSubmit = {this.storeNewUser} >
                    <input id='username' placeholder='Enter your name' value = {this.state.username} onChange = {e => this.changeState(e) }/> <br/>
                    <input id='email' placeholder='Enter your email' value={this.state.email} onChange = { e => this.changeState(e) } /> <br/>
                    <input id='phone' placeholder='Enter your phone number' value={this.state.phone} onChange = { e => this.changeState(e) } /> <br/>
                    <input type='password' id='password' placeholder='Enter you password' value={this.state.password} onChange = { e => this.changeState(e) } /> <br/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}
