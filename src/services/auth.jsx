import { getToken } from '../util/authorize';
import request from '../util/request';


export function postLogin(payload) {
  return request.post('/jwt/generateToken', payload)
}

export function getAuthInfo() {
  return request.get('/ldap/getAttributesByAuthentication', null, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}