import { actions as toastrActions } from 'react-redux-toastr';
import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import ToolsActions from '../ducks/tools';

export function* getTools() {
  const response = yield call(api.get, '/tools');

  yield put(ToolsActions.getToolSuccess(response.data));
}

export function* getAllTools({ word }) {
  let response = {};

  if (word) {
    response = yield call(api.get, `/tools?q=${word}`);
  } else {
    response = yield call(api.get, '/tools');
  }

  yield put(ToolsActions.getToolSuccess(response.data));
}

export function* getTagTools({ word }) {
  let response = {};

  if (word) {
    response = yield call(api.get, `/tools?tags_like=${word}`);
  } else {
    response = yield call(api.get, '/tools');
  }

  yield put(ToolsActions.getToolSuccess(response.data));
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
    yield put(ToolsActions.closeAddToolModal());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Tool adicionada',
        message: 'Sua tool foi adicionada com sucesso.',
      }),
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Tool não adicionada',
        message: 'Houve um problema ao inserir a tool.',
      }),
    );
  }
}

export function* deleteRequest({ id }) {
  try {
    yield call(api.delete, `tools/${id}`);

    yield put(ToolsActions.deleteToolSuccess(id));

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Tool removida',
        message: 'Sua tool foi removida com sucesso.',
      }),
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Tool não foi removida',
        message: 'Houve um problema ao remover a tool.',
      }),
    );
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
    yield put(ToolsActions.closeAddToolModal());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Tool editada',
        message: 'Sua tool foi editada com sucesso.',
      }),
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Tool não foi editada',
        message: 'Houve um problema ao editar a tool.',
      }),
    );
  }
}

export function* toolById({ id }) {
  try {
    const response = yield call(api.get, `tools/${id}`);
    yield put(ToolsActions.editToolByIdSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
