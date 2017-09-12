/**
 * Created by Jaewoos on 2017-08-01.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Join extends Component {

    handleChange = (e) => {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.props.changeInfo(nextState);
    }

    handleClick = (e) => {
        this.props.buttonClick();
    }

    handleCheck = (e) => {

    }

    render() {
        return (
            <div className="label_acc">
                <h2>회원가입</h2>
                <h3>사용자 정보 입력</h3>
                <label for="login_id"/>
                <input type="text" id="login_id"
                       className="namebox"
                       placeholder="사용자 성함"
                       name="username"
                       onChange={this.handleChange}
                />
                <label for="login_em"/>
                <input type="text" id="login_em"
                       className="accbox"
                       placeholder="이메일"
                       name="userid"
                       onChange={this.handleChange}
                />
                <label for="login_psw"/>
                <input type="password" id="login_psw"
                       className="pswdbox"
                       placeholder="비밀번호"
                       name="userpw"
                       onChange={this.handleChange}
                />
                <a onClick={this.handleClick} className="acc_submit">가입하기</a>
                <p className="acc_agree">
                    <input type="checkbox" id="agree_chck" className="agree"/>
                    <label for="agree_chck" className="save_acc">이용약관과 개인정보취급방침에 동의하기</label>
                </p>
            </div>
        );
    }
}

export default Join;