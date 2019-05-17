import { all, takeLatest } from 'redux-saga/effects';

import { ToolsTypes } from '../ducks/tools';
import {
  getTools, createTools, deleteRequest, editRequest,
} from './tools';

export default function* rootSaga() {
  return yield all([
    takeLatest(ToolsTypes.GET_TOOL_REQUEST, getTools),
    takeLatest(ToolsTypes.CREATE_TOOL_REQUEST, createTools),
    takeLatest(ToolsTypes.DELETE_TOOL_REQUEST, deleteRequest),
    takeLatest(ToolsTypes.EDIT_TOOL_REQUEST, editRequest),
  ]);
}
