import { Action, AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import postsReducer from './postsReducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    postsPage: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
export default store