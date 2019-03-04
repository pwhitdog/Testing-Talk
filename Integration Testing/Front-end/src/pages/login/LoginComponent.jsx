import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangePassword, onChangeUsername, onLogin, onLogout } from '../../actions/loginAction';
import { UPDATE_PASSWORD, UPDATE_USERNAME } from '../../constants';

const LoginComponent = props => {
    const changeUsername = (event) => {
        props.actions.onChangeUsername({username: event.currentTarget.value, type: UPDATE_USERNAME});
    };

    const changePassword = (event) => {
        props.actions.onChangePassword({password: event.currentTarget.value, type: UPDATE_PASSWORD});
    };

    const login = () => {
        props.actions.onLogin({username: props.username, password: props.password});
    };

    return (
        <div className="container">
            <div className="row mt-2">
                <h3>Login</h3>
            </div>

            <div className="row">
                <label htmlFor="username">Email</label>
                <input
                    id="username"
                    value={props.username}
                    type="text"
                    onChange={changeUsername}
                    className="form-control"
                />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    value={props.password}
                    type="password"
                    onChange={changePassword}
                    className="form-control"
                />
            </div>
            <div className="row">
                <button onClick={login} className="btn btn-outline-primary float-left mt-2">Login</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    if (state.loginReducer.isLoggedIn) {
        window.location.assign('/');
    }
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password,
        error: state.loginReducer.error,
        isLoggedIn: state.loginReducer.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            onChangePassword,
            onChangeUsername,
            onLogin,
            onLogout
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);