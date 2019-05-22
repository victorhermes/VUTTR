import { reducer as toastr } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import { reducer as tools } from './tools';

export default combineReducers({ tools, toastr });
