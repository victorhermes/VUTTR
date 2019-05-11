import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";

const App = () => (
    <Provider store={store}>
        <Fragment>
            <Main />
            <GlobalStyle />
        </Fragment>
    </Provider>
);

export default App;
