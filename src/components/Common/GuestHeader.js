/**
 * Created by Jaewoos on 2017-07-30.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const GuestHeadaer = () => (

    <div className="gusetheaderwrap">
        <Link exact to="/"><h1 className="serlogo">아워오피스</h1></Link>
        <div className="before">
            <Link to="/"><a className="before_login">로그인</a></Link>
            <Link to="/join"><a className="before_acc">회원가입</a></Link>
        </div>
    </div>
)

export default GuestHeadaer;