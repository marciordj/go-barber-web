import React, { Fragment } from 'react';

import Login from './pages/Login';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Fragment>
      {/* <Login /> */}
      <SignIn />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
