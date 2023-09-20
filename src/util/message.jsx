export function successMessage(title, content) {
  return {
    severity: 'success',
    summary: title,
    detail: content
  }
}

export function infoMessage(title, content) {
  return {
    severity: 'info',
    summary: title,
    detail: content,
  }
}

export function errorMessage(title, content) {
  return {
    severity: 'error',
    summary: title,
    detail: content,
  }
}

export function warningMessage(title, content) {
  return {
    severity: 'warning',
    summary: title,
    detail: content,
  }
}