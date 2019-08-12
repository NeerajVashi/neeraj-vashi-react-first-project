import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware} from 'redux';
import library from './library'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    library: library,
})

const middleWare = applyMiddleware(promise, thunk, logger)

const  store = createStore(reducers,{},composeWithDevTools(middleWare));
console.log('Index');
export default store










// const reducers = combineReducers({
//     Author: AuthorReducer,
//     // BookReducer: BookReducer
// })