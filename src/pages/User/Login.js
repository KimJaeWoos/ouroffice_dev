/**
 * Created by Jaewoos on 2017-08-13.
 */
import React, { Component } from 'react';
import {LoginContainer} from 'containers'

class Login extends Component {

    constructor(props) {
        super();
    }

    loginSuccess = () => {
        this.props.successLogin();
    };


    render() {
        return (
            <LoginContainer login={this.loginSuccess}/>
        )
    };
};

export default Login;