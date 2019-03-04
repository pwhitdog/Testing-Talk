import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './pages/navbar/NavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './pages/home/HomeComponent';
import { Route, Switch } from 'react-router';
import LoginComponent from './pages/login/LoginComponent';
import RegisterComponent from './pages/register/RegisterComponent';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'

const rootReducer = combineReducers({
    loginReducer,
    registerReducer
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

const App = () =>  (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavbarComponent />

                <Switch>
                    <Route exact={true} path="/" component={HomeComponent} />
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/register" component={RegisterComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
