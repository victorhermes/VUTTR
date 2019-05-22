import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Main from './pages/Main';
import store from './store';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Main />
      <GlobalStyle />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Fragment>
  </Provider>
);

export default App;
