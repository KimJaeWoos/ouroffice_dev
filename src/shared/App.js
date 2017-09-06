import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Etc, Home, Team, Login, Join, Search } from 'pages';
import {GuestHeader, UserHeader, Footer, NoMatch} from 'components';
import HeaderContainer from "../containers/LayoutContainer/HeaderContainer";

class App extends Component {

    constructor(props) {
        super();

        this.state = {
            isLogin: false
        }
    }

    changeState = () => {
        this.setState({
            isLogin: true
        });
    };

    render() {
        const {isLogin} = this.state;

        return (
            <div>
                <HeaderContainer isLogin={isLogin}/>
                {
                    isLogin ? (
                        <Switch>
                            <Route path="/etc" component={Etc}/>
                            <Route path="/team" component={Team}/>
                            <Route path="/" component={Home}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/join" component={Join}/>
                            <Route path="/search" component={Search}/>
                            <Route path="/" render={(props) => (
                                <Login successLogin={this.changeState}/>
                            )}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    )
                }
                <Footer/>
            </div>
        );
    }
}

export default App;
