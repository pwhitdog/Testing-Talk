import {
    LOGIN_INFORMATION,
    SET_TOKEN,
    UPDATE_PASSWORD1,
    UPDATE_PASSWORD2,
    UPDATE_USERNAME
} from '../constants';
import { RegisterObject } from '../objects/registerObject';

const registerReducer = (state = {}, registerObject: RegisterObject) => {
    switch (registerObject.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, registerObject);
        case UPDATE_PASSWORD1:
            return Object.assign({}, state, registerObject);
        case UPDATE_PASSWORD2:
            return Object.assign({}, state, registerObject);
        case SET_TOKEN:
            state = Object.assign({}, state, registerObject);
            localStorage.setItem(LOGIN_INFORMATION, JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default registerReducer;