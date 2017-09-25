/**
 * Created by Jaewoos on 2017-09-19.
 */
import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.mainTitle}</h2>
                <h3>{this.props.subTitle}</h3>
            </div>
        );
    }
}

export default Title;
