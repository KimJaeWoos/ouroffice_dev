/**
 * Created by Jaewoos on 2017-07-30.
 */
import React, {Component} from 'react';
import '../../static/css/Join.css';

class JoinContainer extends Component {

    constructor(props) {
        super();

    }

    showLoding = () => {

    }


    render() {
        return (
            <div className="wrap">
                <div className="contswrap">
                    <div className="plus_acc">
                        <form action="#" method="post">
                            <fieldset className="">
                                <legend>로그인</legend>
                                <div className="label_acc">
                                    <h2>회원가입</h2>
                                    <h3>사용자 정보 입력</h3>
                                    <label for="login_id"></label>
                                    <input type="text" id="login_id" className="namebox" placeholder="사용자 성함"/>
                                        <label for="login_em"></label>
                                        <input type="text" id="login_em" className="accbox" placeholder="이메일"/>
                                            <label for="login_psw"></label>
                                            <input type="text" id="login_psw" className="pswdbox" placeholder="비밀번호"/>
                                                <a href="" className="acc_submit">
                                                    가입하기
                                                </a>
                                                <p className="acc_agree">
                                                    <input type="checkbox" id="agree_chck" className="agree"/>
                                                        <label for="agree_chck" className="save_acc">이용약관과 개인정보취급방침에 동의하기.</label>
                                                </p>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default JoinContainer;