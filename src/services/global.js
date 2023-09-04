/**
 * 渲染錯誤訊息
 * 
 * @param {object} errors 
 * @param {object} touched 
 * @param {string} key 
 * @returns 
 */
export function renderValidateField(errors, touched, key) {
  if (errors[key] && touched[key]) {
    return (
      <div>
        <small className="text-red-600 block">{errors[key]}</small>
      </div>
    );
  }
  return null;
}