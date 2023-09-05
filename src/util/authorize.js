const TOKEN_KEY = 'authorization.key';

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function cleanToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}