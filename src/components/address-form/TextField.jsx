import React from 'react'
import {ErrorMessage, useField} from 'formik'

export const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  console.log(field)
  console.log(meta)
  return (
    <div className={`textfield ${field.name === 'similar' && 'similar'}`}>
      <label
        htmlFor={field.name}
        className={`labelShipping ${
          field.name === 'similar' && 'similarLabel'
        } ${meta.touched && meta.error && 'errorLabel'}
        ${meta.touched && !meta.error && 'is-valid'} `}
      >
        {label}
      </label>
      <input
        className={` inputField ${meta.touched && !meta.error && 'is-valid'} ${
          meta.touched && !meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
