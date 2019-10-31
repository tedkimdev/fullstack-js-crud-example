import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import EmployeesList from '../components/employees-list.component';
import { getEmployeesAction } from '../reducers/employee';
import { Title, Container } from '../styled';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAction())
  }, []);

  return (
    <Container>
      <Title>Employee List</Title>
      <EmployeesList />
    </Container>
  );
};

export default Home;
