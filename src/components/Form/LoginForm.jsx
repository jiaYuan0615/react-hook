import _ from "lodash";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Formik } from "formik";

import "./LoginForm.scss"
import { renderValidateField } from '../../services/global'

export default function LoginForm({ handleSubmit }) {
  const columns = [
    {
      key: "username",
      label: "帳號",
      require: true,
      render: (
        { key, label },
        values,
        handleChange,
        handleBlur,
        checkStatus
      ) => (
        <span className="p-input-icon-right">
          <i className="pi pi-user" />
          <InputText
            name={key}
            className={`w-full ${checkStatus(key)}`}
            value={values[key]}
            onChange={(e) => handleChange(e, key)}
            onBlur={(e) => handleBlur(e, key)}
            placeholder={`請輸入${label}`}
          />
        </span>
      ),
    },
    {
      key: "password",
      label: "密碼",
      require: true,
      render: (
        { key, label },
        values,
        handleChange,
        handleBlur,
        checkStatus
      ) => (
        <Password
          className={`w-full ${checkStatus(key)}`}
          name={key}
          toggleMask
          value={values[key]}
          onChange={(e) => handleChange(e, key)}
          onBlur={(e) => handleBlur(e, key)}
          placeholder={`請輸入${label}`}
        />
      ),
    }
  ]

  let initialValues = new Object();
  columns.map((column) => {
    initialValues = {
      ...initialValues,
      [column.key]: ''
    }
  })

  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors = new Object();
          columns.map(column => {
            if (column.require && values[column.key] === '') {
              errors = {
                ...errors,
                [column.key]: '此欄位為必填'
              }
            }
          })
          return errors;
        }}
        onSubmit={(params) => handleSubmit(params)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => {
          const handleOnChange = (e, key) => {
            const value = _.get(e, "value", _.get(e, 'target.value'));
            handleChange({ target: { id: key, name: key, value } });
          };

          const handleOnBlur = (e, key) => {
            const value = _.get(e, "value", e.target.value);
            handleBlur({ target: { id: key, name: key, value } });
          };

          const validateFieldsStyle = (key) => errors[key] && touched[key] && "p-invalid";

          return (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                {
                  _.map(columns, column => (
                    <div
                      key={column.key}
                      className="mb-5"
                    >
                      {column.render(
                        column,
                        values,
                        handleOnChange,
                        handleOnBlur,
                        validateFieldsStyle
                      )}
                      {renderValidateField(errors, touched, column.key)}
                    </div>
                  ))
                }
                <div className="flex gap-x-2">
                  <Button
                    type="submit"
                    className="w-full"
                    icon="pi pi-sign-in"
                    title="登入"
                    label="登入"
                  />
                  <Button
                    className="w-full"
                    icon="pi pi-undo"
                    severity="warning"
                    color="warning"
                    type="reset"
                    title="清除"
                    label="清除"
                  />
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </div >
  )
}