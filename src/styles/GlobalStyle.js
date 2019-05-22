import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;

    }

    body {
        overflow: ${props => (props.tools.openEditToolModal || props.tools.openAddToolModal ? 'hidden' : '')};
        background: #31225F;
        color: #FFF;
        font-family: 'Source Sans Pro', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    html, body, #root {
        height: 100%;
    }

    input, button {
        font-family: 'Source Sans Pro', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

const mapStateToProps = state => ({
  tools: state.tools,
});

export default connect(
  mapStateToProps,
  null,
)(GlobalStyle);
