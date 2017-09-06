/**
 * Created by Jaewoos on 2017-08-01.
 */
import React, {Component} from 'react';

class Search extends Component {

    handleChange = (e) => {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.props.changeInfo(nextState);
    }

    handleClick = (e) => {
        this.props.buttonClick();
    }

    render() {
        return (
            <div className="srch_pw">
                <h2>비밀번호 찾기</h2>
                <span className="pw_title">비밀번호를 잊으셨나요?</span>
                <span className="sub_explain">회원가입 시 등록한 정보로 비밀번호를 찾을 수 있습니다.</span>
                <label for="login_id"></label>
                <input type="text"
                       id="login_id"
                       className="email_srch"
                       placeholder="이메일 주소"
                       name="userid"
                       onChange={this.handleChange}/>
                <label for="login_pw"></label>
                <input type="text"
                       id="login_pw"
                       className="pw_srch"
                       placeholder="이름"
                       name="username"
                       onChange={this.handleChange}/>
                <a onClick={this.handleClick} className="srch_submit">비밀번호 이메일 전송받기</a>
            </div>
        );
    }
}

export default Search;