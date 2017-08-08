/**
 * Created by Jaewoos on 2017-08-01.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../static/css/Join.css';

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
            <div className="label_login">
                <h2>회원가입</h2>
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
                <p className="login_plus">
                    <input type="checkbox" id="saveemil" className="save_emil_chck"/>
                    <label for="saveemil" className="save_acc">이메일 기억하기</label>
                    <input type="checkbox" id="savelogin" className="save_acc_chck"/>
                    <label for="savelogin" className="save_acc">로그인 상태유지</label>
                    <NavLink exact to="/home/join"><a className="save_id">회원가입</a></NavLink>
                </p>
                <a className="login_submit" onClick={this.handleClick}>로그인</a>
            </div>
        );
    }
}

export default Join;