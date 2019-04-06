import {jobs} from "./index";
import {all} from "redux-saga/effects";

export default function* rootSaga() {
	yield all([jobs()]);
}