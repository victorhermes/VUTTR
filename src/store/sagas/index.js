import { all, takeLatest } from "redux-saga/effects";

import { getTools, createTools } from "./tools";
import { ToolsTypes } from "../ducks/tools";

export default function* rootSaga() {
    return yield all([
        takeLatest(ToolsTypes.GET_TOOL_REQUEST, getTools),
        takeLatest(ToolsTypes.CREATE_TOOL_REQUEST, createTools)
    ]);
}
