export const initialState = {
  employees: [],
  getEmployeesError: '',
  isAddingEmployee: false,
  employeeAdded: false,
  createEmployeeError: '',
};

export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE';

export const CREATE_EMPLOYEE_REQUEST = 'CREATE_EMPLOYEE_REQUEST';
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS';
export const CREATE_EMPLOYEE_FAILURE = 'CREATE_EMPLOYEE_FAILURE';
export const SET_CREATE_EMPLOYEE_INITIAL_STATE = 'SET_CREATE_EMPLOYEE_INITIAL_STATE';

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

export const createEmployeeAction = (data) => {
  return {
    type: CREATE_EMPLOYEE_REQUEST,
    data
  }
}
export const setCreateEmployeeInitialState = () => {
  return {
    type: SET_CREATE_EMPLOYEE_INITIAL_STATE
  }
}

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
      return {
        ...state,
        getEmployeesError: action.error
      }
    case SET_CREATE_EMPLOYEE_INITIAL_STATE: 
      return {
        ...state,
        createEmployeeError: '',
        isAddingEmployee: false,
        employeeAdded: false
      }
    case CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        createEmployeeError: '',
        isAddingEmployee: true,
        employeeAdded: false
      }
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        getEmployeesError: '',
        isAddingEmployee: false,
        employeeAdded: true
      }
    case CREATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        createEmployeeError: action.error,
        isAddingEmployee: false,
        employeeAdded: false
      }
    default:
      return state
  }
};

export default reducer;
