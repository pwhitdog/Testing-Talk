import { HANDLE_ERROR, LOGOUT, SET_TOKEN } from '../constants';
import { LoginResponse } from '../objects/loginResponseObject';

export const onChangeUsername = (obj: {username: string, type: string}) => {
    return {
            type: obj.type,
            username: obj.username,
    };
};

export const onChangePassword = (obj: {password: string, type: string}) => {
    return {
            type: obj.type,
            password: obj.password
    };
};

export const onLogout = () => {
    return {
        type: LOGOUT
    };
};

export const onLogin = (obj: {password: string, username: string}) => {
    return (dispatch: (obj:
               {type: string, token: string, error: string, roles: Array<string>, isLoggedIn: boolean}) => void) => {
        fetch('http://localhost:5000/api/Account/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: obj.username, password: obj.password})
        })
            .then(res => res.json())
            .then(body => {
                let loginResponse: LoginResponse = JSON.parse(body);
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
