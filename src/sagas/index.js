import { all, call } from 'redux-saga/effects';
import employee from './employee';

export default function* rootSaga() {
  yield all([
    call(employee)
  ]);
}
