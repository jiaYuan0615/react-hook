import { all } from "redux-saga/effects";

const sagas = ["global", "auth"];

const Sagas = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Sagas);
}
