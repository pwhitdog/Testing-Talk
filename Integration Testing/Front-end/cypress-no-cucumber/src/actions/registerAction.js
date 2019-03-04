import axios from 'axios'
import { HANDLE_ERROR, SET_TOKEN, BASE_URL } from '../constants';

export const onRegister = ({password, username}) => {
    return(dispatch) => {
        axios.post(BASE_URL +'/api/Account/Register', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({email: username, password: password})
        })
        .then(body => {
            const { Token, Roles } = body.data
            return dispatch({
                type: SET_TOKEN,
                token: Token,
                roles: Roles,
                error: '',
                isLoggedIn: true
                }
            );
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: HANDLE_ERROR,
                error: error.toString(),
                roles: [],
                token: '',
                isLoggedIn: false
            });
        });
    };
};

export const onChangePassword1 = (password1, type) => {
    return {
        type,
        password1: password1
    };
};

export const onChangePassword2 = (password2, type) => {
    return {
        type,
        password2: password2
    };
};

export const onChangeUsername = (username, type) => {
    return {
        type,
        username,
    };
};