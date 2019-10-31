import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE
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

function removeEmployeeAPI(id) {
  return axios.delete(`/employees/${id}`);
}

function* removeEmployee(action) {
  try {
    const response = yield call(removeEmployeeAPI, action.id);
    yield put({
      type: DELETE_EMPLOYEE_SUCCESS,
      id: response.data
    });
  } catch (e) {
    yield put({
      type: DELETE_EMPLOYEE_FAILURE,
      error: e,
    });
  }
}

function* watchRemoveEmployee() {
  yield takeLatest(DELETE_EMPLOYEE_REQUEST, removeEmployee);
}

function getEmployeeAPI(id) {
  return axios.get(`/employees/${id}`);
}

function* getEmployee(action) {
  try {
    const response = yield call(getEmployeeAPI, action.id);
    yield put({
      type: GET_EMPLOYEE_SUCCESS,
      employee: response.data
    });
  } catch (e) {
    yield put({
      type: GET_EMPLOYEE_FAILURE,
      error: e,
    });
  }
}

function* watchGetEmployee() {
  yield takeLatest(GET_EMPLOYEE_REQUEST, getEmployee);
}

function updateEmployeeAPI(data) {
  return axios.put(`/employees/${data.id}`, data);
}

function* updateEmployee(action) {
  try {
    const response = yield call(updateEmployeeAPI, action.data);
    yield put({
      type: UPDATE_EMPLOYEE_SUCCESS,
      employee: response.data
    });
  } catch (e) {
    yield put({
      type: UPDATE_EMPLOYEE_FAILURE,
      error: e,
    });
  }
}

function* watchUpdateEmployee() {
  yield takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployee);
}

export default function* employeeSaga() {
  yield all([
    fork(watchGetEmployees),
    fork(watchCreateEmployee),
    fork(watchRemoveEmployee),
    fork(watchGetEmployee),
    fork(watchUpdateEmployee)
  ]);
}
