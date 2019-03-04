import { HANDLE_ERROR, LOGIN_INFORMATION, LOGOUT, SET_TOKEN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants';

let initialStateString = localStorage.getItem(LOGIN_INFORMATION);
let initialState = initialStateString === null ? {} : JSON.parse(initialStateString);

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, action);
        case UPDATE_PASSWORD:
            return Object.assign({}, state, action);
        case SET_TOKEN:
            state = Object.assign({}, state, action);
            localStorage.setItem(LOGIN_INFORMATION, JSON.stringify(state));
            return state;
        case HANDLE_ERROR:
            return Object.assign({}, state, action);
        case LOGOUT:
            localStorage.removeItem(LOGIN_INFORMATION);
            return {};
        default:
            return state;
    }
};

export default loginReducer;