import { all, takeLatest } from "redux-saga/effects";

import { getTools, filterTools } from "./tools";
import { ToolsTypes } from "../ducks/tools";

export default function* rootSaga() {
    return yield all([
        takeLatest(ToolsTypes.GET_TOOL_REQUEST, getTools),
        takeLatest(ToolsTypes.FILTER_TOOL_REQUEST, filterTools)
    ]);
}
