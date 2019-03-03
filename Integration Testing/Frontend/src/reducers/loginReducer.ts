import { HANDLE_ERROR, LOGIN_INFORMATION, LOGOUT, SET_TOKEN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants';
import { LoginObject } from '../objects/loginObject';

let initialStateString = localStorage.getItem(LOGIN_INFORMATION);
let initialState = initialStateString === null ? {} : JSON.parse(initialStateString);

const loginReducer = (state = initialState, login: LoginObject) => {
    switch (login.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, login);
        case UPDATE_PASSWORD:
            return Object.assign({}, state, login);
        case SET_TOKEN:
            state = Object.assign({}, state, login);
            localStorage.setItem(LOGIN_INFORMATION, JSON.stringify(state));
            return state;
        case HANDLE_ERROR:
            return Object.assign({}, state, login);
        case LOGOUT:
            localStorage.removeItem(LOGIN_INFORMATION);
            return {};
        default:
            return state;
    }
};

export default loginReducer;