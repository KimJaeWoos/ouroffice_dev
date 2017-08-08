/**
 * Created by Jaewoos on 2017-07-30.
 */
import React, {Component} from 'react';
import { Login, Loading } from 'components';
import '../../static/css/Login.css';

class LoginContainer extends Component {

    constructor(props) {
        super();

        this.state = {
            userid: '',
            userpw: '',
            isLogin: false,
            loadingVisaibillty: false
        }
    }

    showLoding = () => {
        this.setState({
            loadingVisaibillty: true
        });

        setTimeout(
            () => {
                this.setState({
                    loadingVisaibillty: false
                });
            }, 1500
        );
    }

    loginButtonClick = () => {
        this.showLoding();
    }

    setUserInfo = (info) => {
        this.setState(info);
    }

    render() {
        const {loadingVisaibillty, userid, userpw} = this.state;

        return (
            <div className="wrap">
                <div className="contswrap">
                    <div className="login">
                        <form action="#" method="post">
                            <fieldset className="">
                                <legend>로그인</legend>
                                <Login
                                    changeInfo={this.setUserInfo}
                                    buttonClick={this.loginButtonClick}
                                />
                                <Loading visible={loadingVisaibillty} message={userid +"/"+ userpw + "로그인 시도"}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default LoginContainer;