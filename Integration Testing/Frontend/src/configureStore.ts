import { applyMiddleware, createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registerReducer from './reducers/registerReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
} as {});

const middleware = [thunk];

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}