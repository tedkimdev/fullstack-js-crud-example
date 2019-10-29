import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../components/app-layout.component'

const Home = () => {
  return (
    <>
      <Head>
        <title>Plexxis Exercise</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <AppLayout>
        <Link href="/employee/create">Create</Link>
        <div>Home</div>
      </AppLayout>
    </>
  );
};

export default Home;
