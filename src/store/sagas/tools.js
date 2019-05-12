import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import ToolsActions from "../ducks/tools";

export function* getTools() {
    const response = yield call(api.get, "tools");

    yield put(ToolsActions.getToolSuccess(response.data));
}

export function* filterTools({ text }) {
    try {
        yield put(ToolsActions.filterToolSuccess(text));
    } catch (err) {
        console.tron.log(err);
        console.tron.log("Erro no sagas filterTools");
    }
}

/*export function* createProjects({ title }) {
    try {
        const response = yield call(api.post, "projects", { title });

        yield put(ProjectsActions.createProjectSuccess(response.data));
        yield put(ProjectsActions.closeProjectModal());
    } catch (err) {
        yield put(
            toastrActions.add({
                type: "error",
                title: "Houve um problema!"
            })
        );
    }
}

*/
