import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { createEmployeeAction } from '../../reducers/employee';
import EmployeeForm from '../../components/employee-form.component';
import { Title, Container } from '../../styled';

const EditEmployee = () => {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.employee.employee);
  const employeeUpdated = useSelector(state => state.employee.employeeUpdated);

  useEffect(() => {
    if (employeeUpdated) {
      Router.push('/');
    }
  }, [employeeUpdated]);

  const onEdit = () => {
    console.log('On Edit');
  }

  return (
    <Container>
      <Title>Update Employee</Title>
      <EmployeeForm
        submitAction={onEdit}
        isNew={false}
      />
    </Container>
  );
};

export default EditEmployee;
