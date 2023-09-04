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