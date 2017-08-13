/**
 * Created by Jaewoos on 2017-08-13.
 */
import React, {Component} from 'react';
import { GuestHeader, UserHeader } from 'components';

class HeaderContainer extends Component {

    constructor(props) {
        super();

    }

    render() {
        return (
            <div>
                {
                    this.props.isLogin ? (
                        <UserHeader/>
                    ) : (
                        <GuestHeader/>
                    )
                }
            </div>
        )
    };

}

export default HeaderContainer;