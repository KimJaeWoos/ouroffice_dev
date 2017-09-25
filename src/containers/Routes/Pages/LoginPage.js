/**
 * Created by Jaewoos on 2017-08-13.
 */
import React, { Component } from 'react';
import { Login, Loading, Title } from 'components';
import { connect } from 'react-redux';
import { success, fail } from '../../../action'

class LoginPage extends Component {

    constructor(props) {
        super();

        this.state = {
            userid: '',
            userpw: '',
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

                // 로그인 성공 셋팅
                //this.props.successLogin();
                this.props.success();
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
                                <Title
                                    mainTitle = "아워오피스"
                                    subTitle = "로그인"
                                />
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

};

LoginPage.defaultProps = {
    successMsg: '로그인 성공',
    failMsg: '로그인 실패',
    emptyMsg: '이메일과 패스워드를 정확히 입력해주세요.',
    validateMsg: '이메일 형식에 맞지 않습니다.'
};

let mapDispatchToProps = (dispatch) => {
    return {
        success: () => dispatch(success()),
        fail: () => dispatch(fail()),
    }
}

LoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export default LoginPage;