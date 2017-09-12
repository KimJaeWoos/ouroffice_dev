import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Etc, Home, Team, Login, Register, Search } from 'containers';
import {GuestHeader, UserHeader, Footer, NoMatch} from 'components';

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
                {
                    isLogin ? (
                        <div>
                            <UserHeader/>
                            <Switch>
                                <Route path="/etc" component={Etc}/>
                                <Route path="/team" component={Team}/>
                                <Route path="/" component={Home}/>
                                <Route component={NoMatch}/>
                            </Switch>
                            <Footer/>
                        </div>
                    ) : (
                        <div>
                            <GuestHeader/>
                            <Switch>
                                <Route path="/join" component={Register}/>
                                <Route path="/search" component={Search}/>
                                <Route path="/" render={(props) => (
                                    <Login successLogin={this.changeState}/>
                                )}/>
                                <Route component={NoMatch}/>
                            </Switch>
                            <Footer/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
