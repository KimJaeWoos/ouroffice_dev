import { SUCCESS, FAIL } from '../action';
import { combineReducers } from 'redux';

const loginInitialState = {
    status: false
};

const login = (state = loginInitialState, action) => {
    switch(action.type) {
        case SUCCESS:
            return Object.assign({}, state, {
                status: true
            });
        case FAIL:
            return Object.assign({}, state, {
                status: false
            });
        default:
            return state;
    }
};

const loginApp = combineReducers({
    login
});

export default loginApp;