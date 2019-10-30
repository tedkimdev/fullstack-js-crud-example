import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import {GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_FAILURE } from '../reducers/employee';

function getEmployeesAPI() {
  return fetch('http://localhost:8080/api/employees')
    .then(response => response.json())
}

function* getEmployees() {
  try {
    const employees = yield call(getEmployeesAPI);
    yield put({
      type: GET_EMPLOYEES_SUCCESS,
      employees: employees.map(employee => ({ ...employee, _id: employee.id }))
    });
  } catch (e) {
    yield put({
      type: GET_EMPLOYEES_FAILURE,
      error: e,
    });
  }
}

function* watchGetEmployees() {
  yield takeLatest(GET_EMPLOYEES_REQUEST, getEmployees);
}

export default function* employeeSaga() {
  yield all([
    fork(watchGetEmployees)
  ]);
}
