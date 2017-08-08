/**
 * Created by Jaewoos on 2017-07-30.
 */
import React, {Component} from 'react';
import "../../static/css/Loading.css";

class Loding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closing: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if(this.props.visible && !nextProps.visible) {

            this.setState({
                closing: true
            });

            // 1 sec after
            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                }, 1000
            );
        }
    }

    render() {
        const { message, visible } = this.props;
        const { closing } = this.state;

        if(!visible && !closing) return null;
        return (
            <div className="Loading-wrapper">
                <div className={`Loading ${closing?'bounceOut':'bounceIn'} animated`}>
                    {message}
                </div>
            </div>
        );
    }
}

export default Loding;