import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './app/Model/root-reducer';
import {requestHandler as userSaga} from './app/Model/user/saga';

const sagaMidleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMidleware));

sagaMidleware.run(userSaga);

export {store};
