import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Main from './pages/Main';
import store from './store';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <Provider store={store}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>VUTTR by Victor Hermes</title>
      <meta
        name="description"
        content="Save interesting tools in a safe place. From programmers to programmers."
      />
      <meta name="keywords" content="Tools to remember, Tools, JS, HTML, React, VUTTR" />
      <meta name="author" content="Victor Hermes" />
    </Helmet>

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
