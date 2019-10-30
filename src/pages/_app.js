import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';

import AppLayout from '../components/app-layout.component';
import reducer from '../reducers';

const App = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Plexxis Exercise</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const store = createStore(reducer, initialState);
  // customize store here
  return store;
})(App);
