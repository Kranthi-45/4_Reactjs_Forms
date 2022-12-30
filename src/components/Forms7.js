import React from 'react';
import { Formik, Form, Field } from 'formik';
import "./styles.css";


function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const FieldLevelValidationExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
                                                                               {/* pass validateField, validateForm below for manual trigger valid */}
      {({ errors, touched, isValidating , validateField, validateForm }) => (
        <Form>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field name="username" validate={validateUsername} />
          {errors.username && touched.username && <div>{errors.username}</div>}

          <button type="submit">Submit</button>

            {/** Trigger field-level validation imperatively */}                {/* add these two buttons to hit manual validations */}
           <button type="button" onClick={() => validateField('username')}>
             Check Username (Validate one)
           </button>

           {/** Trigger form-level validation imperatively */}
           <button type="button" onClick={() => validateForm().then(() => alert("manual trigger validations"))}>
             Validate All
           </button>
        </Form>
      )}
    </Formik>
  </div>
);