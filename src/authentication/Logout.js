import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
       this.props.onclick();
    }
    render() {
        console.log('msg = ', this.props.msg)
        if (this.props.status) {
            return (
                <div>
                    <div>{this.props.msg}</div>
                    <input type='submit' value='logout'/>
                </div>

            )
        } else {
            return (
                <div>
                <div>{this.props.msg}</div>
                <input type='submit' value='submit'/>
                </div>
            )
        }

    }
}
