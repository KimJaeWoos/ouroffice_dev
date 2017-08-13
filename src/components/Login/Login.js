/**
 * Created by Jaewoos on 2017-07-30.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Login extends Component {

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
            <div className="label_login">
                <h2>아워오피스</h2>
                <h3>로그인</h3>
                <label for="login_id"/>
                <input type="text" id="login_id"
                       className="emailbox"
                       name="userid"
                       placeholder="email address"
                       onChange={this.handleChange}
                />
                <label for="login_pw"/>
                <input type="text"
                       id="login_pw"
                       className="pwbox"
                       name="userpw"
                       placeholder="password"
                       onChange={this.handleChange}
                />
                <a className="login_submit" onClick={this.handleClick}>로그인</a>
                <p className="login_plus">
                    <input type="checkbox" id="saveemil" className="save_emil_chck"/>
                    <label for="saveemil" className="save_acc">이메일 기억하기</label>
                    <input type="checkbox" id="savelogin" className="save_acc_chck"/>
                    <label for="savelogin" className="save_acc">로그인 상태유지</label>
                    <span className="srch_info">
                        <a href="" className="srch_id">아이디</a> /
                        <a href="" className="srch_pw">비밀번호 찾기</a>
                    </span>
                </p>
                <NavLink exact to="/join"><a className="new_acc">회원가입</a></NavLink>
            </div>
        );
    }
}

export default Login;