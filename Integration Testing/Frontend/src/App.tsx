import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './pages/navbar/NavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './pages/home/HomeComponent';
import { Route, Switch } from 'react-router';
import LoginComponent from './pages/login/LoginComponent';
import RegisterComponent from './pages/register/RegisterComponent';

const App = () =>  (
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
);

export default App;
