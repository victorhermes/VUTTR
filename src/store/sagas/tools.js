import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ToolsActions from "../ducks/tools";

export function* getTools() {
    const response = yield call(api.get, "tools");

    yield put(ToolsActions.getToolSuccess(response.data));
}
