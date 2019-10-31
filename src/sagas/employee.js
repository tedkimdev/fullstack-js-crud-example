import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAILURE
} from '../reducers/employee';

function getEmployeesAPI() {
  return axios.get(`/employees`);
}

function* getEmployees() {
  try {
    const response = yield call(getEmployeesAPI);
    yield put({
      type: GET_EMPLOYEES_SUCCESS,
      employees: response.data
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

function createEmployeeAPI(data) {
  return axios.post('/employees', data);
}

function* createEmployee(action) {
  try {
    const response = yield call(createEmployeeAPI, action.data);
    const employee = response.data;
    yield put({
      type: CREATE_EMPLOYEE_SUCCESS,
      employee
    });
  } catch (e) {
    yield put({
      type: CREATE_EMPLOYEE_FAILURE,
      error: e,
    });
  }
}

function* watchCreateEmployee() {
  yield takeLatest(CREATE_EMPLOYEE_REQUEST, createEmployee);
}

export default function* employeeSaga() {
  yield all([
    fork(watchGetEmployees),
    fork(watchCreateEmployee)
  ]);
}
