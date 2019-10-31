import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { createEmployeeAction, setCreateEmployeeInitialState } from '../../reducers/employee';
import EmployeeForm from '../../components/employee-form.component';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { isAddingEmployee, employeeAdded } = useSelector(state => state.employee);

  const onCreate = (employee) => {
    dispatch(createEmployeeAction(employee));
  }

  useEffect(() => {
    if (employeeAdded) {
      Router.push('/');
      dispatch(setCreateEmployeeInitialState());
    }
  }, [employeeAdded]);

  return (
    <>
      <EmployeeForm
        submitAction={onCreate}
        isNew={true}
      />
    </>
  );
};

export default CreateEmployee;
