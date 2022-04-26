import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import {TextField} from './TextField'
import './address-form.styles.scss'

export const SignInSchema = Yup.object({
  firstnameShipping: Yup.string()
    .max(15, 'Doit avoir 15 caractères ou moins')
    .required("Can't be empty"),
  lastnameShipping: Yup.string().required("Can't be empty"),
  postalcodeShipping: Yup.string().required("Can't be empty"),
  numberShipping: Yup.string().required("Can't be empty"),
  streetShipping: Yup.string().required("Can't be empty"),
  cityShipping: Yup.string().required("Can't be empty"),
  phoneShipping: Yup.string()
    .required("Can't be empty")
    .matches(/[0-9]{10}$/i, 'Please use a valid phone number'),
  countryShipping: Yup.string().required("Can't be empty"),
  email: Yup.string()
    .required("Can't be empty")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Please use a valid email address',
    ),
})

const AddressForm = () => {
  return (
    <Formik
      initialValues={{
        firstnameShipping: '',
        lastnameShipping: '',
        postalcodeShipping: '',
        numberShipping: '',
        streetShipping: '',
        cityShipping: '',
        phoneShipping: '',
        countryShipping: '',
        email: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {props => (
        <div className="accordion">
          <Form className="address-form">
            <div className="form-group form-group--1">
              <TextField
                label="First Name"
                name="firstnameShipping"
                type="text"
              />
              <TextField
                label="Postal Code"
                name="postalcodeShipping"
                type="text"
              />
              <TextField label="Street" name="streetShipping" type="text" />
              <TextField label="Country" name="countryShipping" type="text" />
              <TextField
                label="L'adresse de facturation est identique à l'adresse de livraison"
                name="similar"
                type="checkbox"
              />
            </div>
            <div className="form-group form-group--2">
              <TextField label="Lastname" name="lastnameShipping" type="text" />
              <TextField label="Number" name="numberShipping" type="text" />
              <TextField label="Affix" name="affixShipping" type="text" />
              <TextField label="City" name="cityShipping" type="text" />
              <TextField label="Phone" name="phoneShipping" type="tel" />
              <TextField label="Email" name="email" type="email" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default AddressForm
