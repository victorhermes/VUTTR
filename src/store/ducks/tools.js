import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getToolRequest: null,
  getToolSuccess: ['data'],
  getAllToolRequest: ['word'],
  getByTagToolRequest: ['word'],
  createToolRequest: ['title', 'link', 'description', 'tags'],
  createToolSuccess: ['data'],
  deleteToolRequest: ['id'],
  deleteToolSuccess: ['id'],
  editToolRequest: ['id', 'title', 'link', 'description', 'tags'],
  editToolSuccess: ['id', 'data'],
  openAddToolModal: null,
  closeAddToolModal: null,
  openEditToolModal: null,
  closeEditToolModal: null,
});

export const ToolsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  toolModalOpen: false,
});

/* Reducers */

export const createSuccess = (state, { data }) => state.merge({ data: [...state.data, data] });

export const success = (state, { data }) => state.merge({ data });

export const openAddModal = state => state.merge({ openAddToolModal: true });

export const closeAddModal = state => state.merge({ openAddToolModal: false });

export const openEditModal = state => state.merge({ openEditToolModal: true });

export const closeEditModal = state => state.merge({ openEditToolModal: false });

export const deleteSuccess = (state, { id }) => state.merge({
  ...state,
  data: state.data.filter(data => data.id !== parseInt(id, 0)),
});

export const editSuccess = (state, { id, data }) => state.merge({
  data: state.data.map(tool => (tool.id === parseInt(id, 0)
    ? {
      ...tool,
      title: data.title,
      description: data.description,
      tags: data.tags,
    }
    : tool)),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOOL_SUCCESS]: success,
  [Types.OPEN_ADD_TOOL_MODAL]: openAddModal,
  [Types.CLOSE_ADD_TOOL_MODAL]: closeAddModal,
  [Types.OPEN_EDIT_TOOL_MODAL]: openEditModal,
  [Types.CLOSE_EDIT_TOOL_MODAL]: closeEditModal,
  [Types.CREATE_TOOL_SUCCESS]: createSuccess,
  [Types.DELETE_TOOL_SUCCESS]: deleteSuccess,
  [Types.EDIT_TOOL_SUCCESS]: editSuccess,
});
