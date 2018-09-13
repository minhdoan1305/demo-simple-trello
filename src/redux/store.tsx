import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {userReducer} from './reducers/userReducer';
import {boardReducer} from "./reducers/boardReducer";
// import logger from 'redux-logger';
import {listCardReducer} from "./reducers/listCardReducer";
import {cardReducer} from "./reducers/cardReducer";
import {rootSaga} from './sagas/rootSaga';

const allReducers = combineReducers({
    user: userReducer,
    board: boardReducer,
    listCard: listCardReducer,
    card: cardReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;