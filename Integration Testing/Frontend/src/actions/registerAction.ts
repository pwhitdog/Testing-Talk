import { HANDLE_ERROR, SET_TOKEN } from '../constants';
import { LoginResponse } from '../objects/loginResponseObject';

export const onRegister = (obj: {password: string, username: string}) => {
    return(dispatch: (
        obj: { type: string, token: string, error: string, roles: Array<string>, isLoggedIn: boolean }) => void) => {
        fetch('http://localhost:5000/api/Account/Register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: obj.username, password: obj.password})
        })
            .then(res => res.json())
            .then(body => {
                const registerResponse: LoginResponse = JSON.parse(body);
                return dispatch({
                    type: SET_TOKEN,
                    token: registerResponse.Token,
                    roles: registerResponse.Roles,
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

export const onChangePassword1 = (obj: {password1: string, type: string}) => {
    return {
        type: obj.type,
        password1: obj.password1
    };
};

export const onChangePassword2 = (obj: {password2: string, type: string}) => {
    return {
        type: obj.type,
        password2: obj.password2
    };
};

export const onChangeUsername = (obj: {username: string, type: string}) => {
    return {
        type: obj.type,
        username: obj.username,
    };
};