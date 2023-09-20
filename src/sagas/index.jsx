import { all } from "redux-saga/effects";

import global from './global'
import auth from './auth'

const sagas = [
  global(),
  auth(),
];


export default function* rootSaga() {
  yield all(sagas);
}
