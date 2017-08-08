/**
 * Created by Jaewoos on 2017-07-30.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../static/css/Header.css";

const Header = () => (

    <div className="headerwrap">
        <NavLink exact to="/"><h1 className="serlogo">아워오피스</h1></NavLink>
        <div className="search">
            <a className="go_search"></a>
        </div>
        <span className="text_srch">
			<input type="text" id="" name="" className="" placeholder="검색어를 입력하세요"/>
			<a className="find_btn">검색</a>
		</span>
        <div className="mymenu">
            <NavLink exact to="/team"><a className="myteam"><span className="blind">팀</span></a></NavLink>
            <NavLink exact to="/home"><a className="myhome"><span className="blind">홈</span></a></NavLink>
            <NavLink exact to="/etc"><a className="plusmenu"><span className="blind">더보기</span></a></NavLink>
        </div>
    </div>
)

export default Header;