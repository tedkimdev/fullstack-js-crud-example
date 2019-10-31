import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import employee from './employee';

const backAddress = process.env.NODE_ENV === 'production' ? 'http://api.something.com' : 'http://localhost:8080';
axios.defaults.baseURL = `${backAddress}/api`;

export default function* rootSaga() {
  yield all([
    fork(employee)
  ]);
}
