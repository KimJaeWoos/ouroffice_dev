/**
 * Created by Jaewoos on 2017-08-13.
 */
import React, { Component } from 'react';
import { Search, Loading } from 'components';

class FindPage extends Component {

    constructor(props) {
        super();

        this.state = {
            userid: '',
            username: '',
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
            }, 1500
        );
    };

    searchButtonClick = () => {
        if (this.state.userid === '' || this.state.username === '') {
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
        const {loadingVisaibillty, userid, username} = this.state;

        return (
            <div className="wrap">
                <div className="contswrap">
                    <div className="srch_idpw">
                        <form action="#" method="post">
                            <fieldset className="">
                                <legend>비밀번호 찾기</legend>
                                <Search
                                    changeInfo={this.setUserInfo}
                                    buttonClick={this.searchButtonClick}
                                />
                                <Loading visible={loadingVisaibillty} message={userid +"/"+ username + "비밀번호 찾기"}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

FindPage.defaultProps = {
    emptyMsg: '이메일과 이름을 정확히 입력해주세요.',
    validateMsg: '이메일 형식에 맞지 않습니다.'
};

export default FindPage;