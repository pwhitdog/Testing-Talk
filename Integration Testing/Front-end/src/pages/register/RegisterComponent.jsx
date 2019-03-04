import * as React from 'react';
import { connect } from 'react-redux';
import { onChangePassword1, onChangePassword2, onChangeUsername, onRegister } from '../../actions/registerAction';
import { bindActionCreators } from 'redux';
import { UPDATE_PASSWORD1, UPDATE_PASSWORD2, UPDATE_USERNAME } from '../../constants';

const RegisterComponent = props => {

    const changeUsername = event => {
        let username = event.currentTarget.value;
        props.actions.onChangeUsername({username, type: UPDATE_USERNAME});
    };

    const changePassword1 = event => {
        let password1 = event.currentTarget.value;
        props.actions.onChangePassword1({password1: password1, type: UPDATE_PASSWORD1});
    };

    const changePassword2 = event => {
        let password2 = event.currentTarget.value;
        props.actions.onChangePassword2({password2: password2, type: UPDATE_PASSWORD2});

    };

    const register = () => {
        if (props.username !== '' && props.password1 !== '' && props.password2 !== '') {
            if (props.password1 === props.password2) {
                props.actions.onRegister({password: props.password1, username: props.username});
            }
        }
    };

    const getPasswordError = () => {
        let errorLength;
        let errorNumber;
        let errorSymbol;
        if (props.password1 && props.password1.length < 6) {
          errorLength = (
              <div className="row">
                  <div className="text-danger">Password length is too short.</div>
              </div>
          );
      }
        if (props.password1 && !/\d/.test(props.password1)) {
          errorNumber = (
              <div className="row">
                  <div className="text-danger">Password must contain a number.</div>
              </div>
          );
      }
        if (props.password1 && !/[?!@#$%^&*)(+=._-]/.test(props.password1)) {
            errorSymbol = (
                <div className="row">
                    <div className="text-danger">Password must contain a special char.</div>
                </div>
            );
        }

        return (
            <div>
                {errorLength}
                {errorNumber}
                {errorSymbol}
            </div>
        );
    };

    const getPasswordMatchError = () => {
      if (props.password1 !== props.password2) {
          return (
              <div className="row">
                  <div className="text-danger">Passwords do not match.</div>
              </div>
          );
      }
      return null;
    };

    const getEmailError = () => {
        const regex1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/;
        const regex2 = /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regex = new RegExp(regex1.source + regex2.source);

        if (props.username && !regex.test(props.username)) {
            return (
                <div className="row">
                    <div className="text-danger">Please ensure the email format is correct.</div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="container">
            <div className="row mt-2">
                <h3>Register</h3>
            </div>
            <div className="row">
                <label htmlFor="username">Email</label>
                <input
                    id="username"
                    type="text"
                    className="form-control"
                    onChange={changeUsername}
                />
            </div>
            {getEmailError()}
            <div className="row">
                <label htmlFor="password1">Password</label>
                <input
                    id="password1"
                    type="password"
                    className="form-control"
                    onChange={changePassword1}
                />
            </div>
            {getPasswordError()}
            <div className="row">
                <label htmlFor="password2">Password</label>
                <input
                    id="password2"
                    type="password"
                    className="form-control"
                    onChange={changePassword2}
                />
            </div>
            {getPasswordMatchError()}
            <div className="row">
                <button className="btn btn-outline-primary mt-2" onClick={register}>Register</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    if (state.registerReducer.isLoggedIn) {
        window.location.assign('/');
    }
    return {
        username: state.registerReducer.username,
        password1: state.registerReducer.password1,
        password2: state.registerReducer.password2,
        error: state.registerReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            onRegister,
            onChangeUsername,
            onChangePassword1,
            onChangePassword2
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);