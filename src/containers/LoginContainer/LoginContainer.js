/**
 * Created by Jaewoos on 2017-07-30.
 */
import React, {Component} from 'react';
import { Login, Loading } from 'components';

class LoginContainer extends Component {

    constructor(props) {
        super();

        this.state = {
            userid: '',
            userpw: '',
            loadingVisaibillty: false
        }
    };

    showLoding = () => {
        this.setState({
            loadingVisaibillty: true
        });

        setTimeout(
            () => {
                this.setState({
                    loadingVisaibillty: false
                });

                // 로그인 성공 셋팅
                this.props.login();
            }, 1500
        );
    };

    loginButtonClick = () => {
        if (this.state.userid === '' || this.state.userpw === '') {
            alert(this.props.emptyMsg);
            return;

        } else if (this.validateEmail(this.state.userid) === false) {
            alert(this.props.validateMsg);
            return;

        }

        this.showLoding();
    };

    setUserInfo = (info) => {
        this.setState(info);
    };

    validateEmail = (value) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    };

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

LoginContainer.defaultProps = {
    successMsg: '로그인 성공',
    failMsg: '로그인 실패',
    emptyMsg: '이메일과 패스워드를 정확히 입력해주세요.',
    validateMsg: '이메일 형식에 맞지 않습니다.'
};

export default LoginContainer;