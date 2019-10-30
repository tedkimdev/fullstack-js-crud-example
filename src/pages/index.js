import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EmployeesList from '../components/employees-list.component';

import { getEmployeesAction } from '../reducers/employee';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAction())
  }, []);

  return (
    <div>
      <div>Home</div>
      <EmployeesList />
    </div>
  );
};

export default Home;
