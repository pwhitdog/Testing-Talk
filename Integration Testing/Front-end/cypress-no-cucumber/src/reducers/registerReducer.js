import {
    LOGIN_INFORMATION,
    SET_TOKEN,
    UPDATE_PASSWORD1,
    UPDATE_PASSWORD2,
    UPDATE_USERNAME
} from '../constants';

const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, action);
        case UPDATE_PASSWORD1:
            return Object.assign({}, state, action);
        case UPDATE_PASSWORD2:
            return Object.assign({}, state, action);
        case SET_TOKEN:
            state = Object.assign({}, state, action);
            localStorage.setItem(LOGIN_INFORMATION, JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default registerReducer;