import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
    getToolRequest: null,
    getToolSuccess: ["data"],
    filterToolRequest: ["text"],
    filterToolSuccess: ["text"],
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

export const success = (state, { data }) => state.merge({ data });

export const filterSuccess = (state, { text }) => {};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TOOL_SUCCESS]: success,
    [Types.FILTER_TOOL_SUCCESS]: filterSuccess
});