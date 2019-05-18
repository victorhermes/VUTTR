import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import ToolsActions from '../ducks/tools';

export function* getTools({ word }) {
  if (word) {
    const response = yield call(api.get, `/tools?q=${word}`);
    yield put(ToolsActions.getToolSuccess(response.data));
  } else {
    const response = yield call(api.get, 'tools');
    yield put(ToolsActions.getToolSuccess(response.data));
  }
}

export function* createTools({
  title, link, description, tags,
}) {
  try {
    const response = yield call(api.post, 'tools', {
      title,
      link,
      description,
      tags,
    });

    yield put(ToolsActions.createToolSuccess(response.data));
    yield put(ToolsActions.closeToolModal());
  } catch (err) {
    console.tron.log(err);
  }
}

export function* deleteRequest({ id }) {
  try {
    yield call(api.delete, `tools/${id}`);

    yield put(ToolsActions.deleteToolSuccess(id));
  } catch (err) {
    console.log(err);
  }
}

export function* editRequest({
  id, title, link, description, tags,
}) {
  try {
    const response = yield call(api.put, `tools/${id}`, {
      title,
      link,
      description,
      tags,
    });

    yield put(ToolsActions.editToolSuccess(id, response.data));
    yield put(ToolsActions.closeToolModal());
  } catch (err) {
    console.log(err);
  }
}
