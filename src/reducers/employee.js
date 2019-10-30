export const initialState = {
  employees: [],
  getEmployeesError: ''
};

export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE';

export const UPDATE_EMPLOYEES_REQUEST = 'UPDATE_EMPLOYEES_REQUEST';
export const UPDATE_EMPLOYEES_SUCCESS = 'UPDATE_EMPLOYEES_SUCCESS';
export const UPDATE_EMPLOYEES_FAILURE = 'UPDATE_EMPLOYEES_FAILURE';

export const DELETE_EMPLOYEES_REQUEST = 'DELETE_EMPLOYEES_REQUEST';
export const DELETE_EMPLOYEES_SUCCESS = 'DELETE_EMPLOYEES_SUCCESS';
export const DELETE_EMPLOYEES_FAILURE = 'DELETE_EMPLOYEES_FAILURE';

export const getEmployeesAction = () => {
  return {
    type: GET_EMPLOYEES_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        getEmployeesError: ''
      }
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        getEmployeesError: '',
        employees: action.employees
      }
    case GET_EMPLOYEES_FAILURE:
      console.log(action.error);
      return {
        ...state,
        getEmployeesError: action.error
      }
    default:
      return state
  }
};

export default reducer;
