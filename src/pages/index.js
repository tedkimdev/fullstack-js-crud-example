import React from 'react';

import EmployeesList from '../components/employees-list.component';

const dummy = {
  isLoading: false
}

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <EmployeesList />
    </div>
  );
};

export default Home;
