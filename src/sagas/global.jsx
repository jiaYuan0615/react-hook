import { select, put, takeLatest } from "redux-saga/effects";

function* PUSH_GoBack({ navigate, callback }) {
  yield navigate(-1);
  if (callback) callback();
}

function* PUSH_GoToRoute({ path, navigate, callback }) {
  yield navigate(path)
  if (callback) callback();
}

function* CHANGE_WindowScreenSize({ payload: windowSize }) {
  const maxWidth = 992;
  const isMobile = yield select((state) => state.global.isMobile);

  if (windowSize <= maxWidth && isMobile !== true) {
    yield put({
      type: "SAVE_isMobile",
      payload: true,
    });
  } else if (windowSize > maxWidth && isMobile !== false) {
    yield put({
      type: "SAVE_isMobile",
      payload: false,
    });
  }
}

export default function* Global() {
  yield takeLatest("PUSH_GoBack", PUSH_GoBack);
  yield takeLatest("PUSH_GoToRoute", PUSH_GoToRoute);
  yield takeLatest("CHANGE_WindowScreenSize", CHANGE_WindowScreenSize);
}
