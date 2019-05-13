import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getToolRequest: null,
    getToolSuccess: ["data"],
    openToolModal: null,
    closeToolModal: null
});

export const ToolsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    data: [],
    toolModalOpen: true
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });

export const openModal = state => state.merge({ toolModalOpen: true });

export const closeModal = state => state.merge({ toolModalOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TOOL_SUCCESS]: success,
    [Types.OPEN_TOOL_MODAL]: openModal,
    [Types.CLOSE_TOOL_MODAL]: closeModal
});
