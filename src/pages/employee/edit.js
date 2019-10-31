import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';

import {
  getEmployeeAction,
  updateEmployeeAction,
  setUpdateEmployeeInitialState
} from '../../reducers/employee';
import EmployeeForm from '../../components/employee-form.component';
import { Title, Container } from '../../styled';

const EditEmployee = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const employee = useSelector(state => state.employee.employee);
  const employeeUpdated = useSelector(state => state.employee.employeeUpdated);

  useEffect(() => {
    const employeeId = router.query.id;
    dispatch(getEmployeeAction(employeeId));
  }, []);

  useEffect(() => {
    if (employeeUpdated) {
      Router.push('/');
      dispatch(setUpdateEmployeeInitialState());
    }
  }, [employeeUpdated]);

  const onEdit = (employee) => {
    dispatch(updateEmployeeAction(employee));
  };
  
  return (
    <Container>
      <Title>Update Employee</Title>
      <EmployeeForm
        key={employee.id || ''}
        employee={employee}
        submitAction={onEdit}
        isNew={false}
      />
    </Container>
  );
};

export default EditEmployee;
