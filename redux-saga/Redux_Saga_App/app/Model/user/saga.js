import {put, takeEvery} from 'redux-saga/effects';
import {GET_USERS_INFO_FAILURE, GET_USERS_INFO_SUCCESS} from './actions';

export function* requestHandler() {
  yield takeEvery('GET_USERS_INFO_REQUEST', fetchUserInfo);
}

function* fetchUserInfo(action) {
  console.log('saga:', action);
  try {
    //API
    const response = yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .catch(e => console.warn(e));
    console.log(response);
    yield put({
      type: GET_USERS_INFO_SUCCESS,
      payload: response,
    });
    console.log('saga ended');
  } catch (error) {
    //HANDLE ERROR
    yield put({type: GET_USERS_INFO_FAILURE, payload: error});
  }
}
