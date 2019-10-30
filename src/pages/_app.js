import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';

import AppLayout from '../components/app-layout.component';
import reducer from '../reducers';
import sagaMiddleware from '../sagas/middleware';
import rootSaga from '../sagas';

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
  // customize store here
  const middlewares = [sagaMiddleware];
  const composeEnhancers = process.env.NODE_ENV === 'production'
    ? compose
    : !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(App);
