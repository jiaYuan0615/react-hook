import { all } from "redux-saga/effects";

// 新增完sage的js檔後，要在這個陣列加入檔名
const sagas = ["global"];

const Sagas = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Sagas);
}
