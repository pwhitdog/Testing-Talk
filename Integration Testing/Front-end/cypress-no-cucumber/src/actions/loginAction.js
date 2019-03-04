import axios from 'axios'
import { UPDATE_USERNAME,
    UPDATE_PASSWORD,
    LOGOUT,
    SET_TOKEN,
    HANDLE_ERROR,
    BASE_URL,
 } from '../constants';

export const onChangeUsername = (username) => {
    return {
            type: UPDATE_USERNAME,
            username,
    };
};

export const onChangePassword = (password) => {
    return {
            type: UPDATE_PASSWORD,
            password
    };
};

export const onLogout = () => {
    return {
        type: LOGOUT
    };
};

export const onLogin = ({password, username}) => {
    return function (dispatch){
        axios.post(BASE_URL +'/api/Account/Login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({email: username, password: password})
        })
            .then(body => {
                let loginResponse = JSON.parse(body);
                return dispatch({
                        type: SET_TOKEN,
                        token: loginResponse.Token,
                        roles: loginResponse.Roles,
                        error: '',
                        isLoggedIn: true
                    }
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch({
                    type: HANDLE_ERROR,
                    token: '',
                    error: error.toString(),
                    roles: [],
                    isLoggedIn: false
                });
            });
    };
};
