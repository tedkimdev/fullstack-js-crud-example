import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Link href="/employee/create"><a>Create</a></Link>
      <div>Home</div>
    </>
  );
};

export default Home;
