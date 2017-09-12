/**
 * Created by Jaewoos on 2017-08-13.
 */
import React, {Component} from 'react';
import { Join, Loading } from 'components';
//import * as service from '../../services/user';

class RegisterPage extends Component {

    constructor(props) {
        super();

        this.state = {
            username: '',
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
            }, 1500
        );
    };


    joinButtonClick = () => {
        if (this.state.userid === '' || this.state.userpw === '' || this.state.username === '') {
            alert(this.props.emptyMsg);
            return;

        } else if (this.validateEmail(this.state.userid) === false) {
            alert(this.props.validateMsg);
            return;

        }

        //this.fetchPostInfo(1);

        this.showLoding();
    };

    fetchPostInfo = async (postId) => {
        //const isLogin = await service.login();
        //console.log(isLogin);
    }

    setUserInfo = (info) => {
        this.setState(info);
    };

    validateEmail = (value) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    };


    render() {
        const {loadingVisaibillty, userid} = this.state;

        return (
            <div className="wrap">
                <div className="contswrap">
                    <div className="plus_acc">
                        <form action="#" method="post">
                            <fieldset className="">
                                <legend>로그인</legend>
                                <Join
                                    changeInfo={this.setUserInfo}
                                    buttonClick={this.joinButtonClick}
                                />
                                <Loading visible={loadingVisaibillty} message={userid +" 회원가입 완료"}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

RegisterPage.defaultProps = {
    successMsg: '회원가입 성공',
    failMsg: '회원가입 실패',
    emptyMsg: '회원정보를 정확히 입력해주세요.',
    validateMsg: '이메일 형식에 맞지 않습니다.'
};

export default RegisterPage;