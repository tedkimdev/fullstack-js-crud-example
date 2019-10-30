export const initialState = {
  employees: []
};

const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE';

const UPDATE_EMPLOYEES_REQUEST = 'UPDATE_EMPLOYEES_REQUEST';
const UPDATE_EMPLOYEES_SUCCESS = 'UPDATE_EMPLOYEES_SUCCESS';
const UPDATE_EMPLOYEES_FAILURE = 'UPDATE_EMPLOYEES_FAILURE';

const DELETE_EMPLOYEES_REQUEST = 'DELETE_EMPLOYEES_REQUEST';
const DELETE_EMPLOYEES_SUCCESS = 'DELETE_EMPLOYEES_SUCCESS';
const DELETE_EMPLOYEES_FAILURE = 'DELETE_EMPLOYEES_FAILURE';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        employees: [{_id: '1222', name: 'name', profession: 'pro', code: 'F100', color: '#FFFFFF', branch: 'branch', city: 'Toronto', assigned: false }]
      }
    default:
      return state
  }
};

export default reducer;
