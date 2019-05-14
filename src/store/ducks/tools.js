import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getToolRequest: null,
    getToolSuccess: ["data"],
    createToolRequest: ["title", "link", "description", "tags"],
    createToolSuccess: ["data"],
    deleteToolRequest: ["id"],
    deleteToolSuccess: ["id"],
    openToolModal: null,
    closeToolModal: null
});

export const ToolsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    data: [],
    toolModalOpen: false
});

/* Reducers */

export const createSuccess = (state, { data }) =>
    state.merge({ data: [...state.data, data] });

export const success = (state, { data }) => state.merge({ data });

export const openModal = state => state.merge({ toolModalOpen: true });

export const closeModal = state => state.merge({ toolModalOpen: false });

export const deleteSuccess = (state, { id }) =>
    state.merge({
        ...state,
        data: state.data.filter(data => data.id !== parseInt(id))
    });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TOOL_SUCCESS]: success,
    [Types.OPEN_TOOL_MODAL]: openModal,
    [Types.CLOSE_TOOL_MODAL]: closeModal,
    [Types.CREATE_TOOL_SUCCESS]: createSuccess,
    [Types.DELETE_TOOL_SUCCESS]: deleteSuccess
});
