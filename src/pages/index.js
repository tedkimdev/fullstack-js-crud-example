import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import EmployeesList from '../components/employees-list.component';
import { getEmployeesAction, removeEmployeeAction } from '../reducers/employee';
import { Title, Container } from '../styled';

const Home = () => {
  const dispatch = useDispatch();
  const removedId = useSelector(state => state.employee.removedId);

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [removedId]);

  const onRemove = useCallback((id) => {
    dispatch(removeEmployeeAction(id));
  }, []);

  const onEdit = useCallback((id) => {
    // TODO: route edit page
  }, []);

  return (
    <Container>
      <Title>Employee List</Title>
      <EmployeesList 
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </Container>
  );
};

export default Home;
