import { call, put, takeLatest } from "redux-saga/effects";
import { postLogin, getAuthInfo } from "../services/auth";
import { errorMessage, successMessage } from "../util/message";
import { cleanToken, setToken } from "../util/authorize";

function* POST_Login({ payload, callback }) {
  const title = '執行登入'
  try {
    const response = yield call(postLogin, payload)
    setToken(response)
    const message = successMessage(title, '登入成功')
    if (callback) callback(message);
  }
  catch (error) {
    const message = errorMessage(title, '登入失敗')
    if (callback) callback(message);
  }
}

function* GET_AuthInfo() {
  try {
    const params = yield call(getAuthInfo);

    const card = params.prop.find((x) => x.indexOf('signonId=') > -1).replace('signonId=', '')

    const payload = {
      name: params.fullname,
      card,
      id: params.cn
    }

    yield put({
      type: "SAVE_Auth",
      payload
    })
  } catch (error) {
    cleanToken()
  }
}

export default function* Auth() {
  yield takeLatest("POST_Login", POST_Login);
  yield takeLatest("GET_AuthInfo", GET_AuthInfo);
}