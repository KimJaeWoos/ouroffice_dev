/**
 * Created by Jaewoos on 2017-07-30.
 */
import React from 'react';
import '../../static/css/Footer.css';

const Footer = ({location, match}) => {

    return (
        <div className="footerwrap">
            <div className="footer">
                <div className="company_menu">
                    <a href="">
                        회사소개
                    </a>|
                    <a href="">
                        이용약관
                    </a>|
                    <a href="">
                        개인정보처리방침
                    </a>|
                    <a href="">
                        제휴안내
                    </a>|
                    <a href="">
                        고객센터
                    </a>
                </div>
                <span className="copyright">
                    Copyright © 2017 Ouroffice™. All rights reserved.
                </span>
            </div>
        </div>
    );
}

export default Footer;