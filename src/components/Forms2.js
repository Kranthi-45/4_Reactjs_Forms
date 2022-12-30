import React from "react";
import { useFormik } from "formik";
import "./styles.css";
import * as Yup from 'yup';


// styles.css is mandatory to apply
export const SignupForm = () => {

 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues

//  const validate = values => {                                            // uncomment it if u use formik default validations insted Yup validationschema
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };

    // Pass the useFormik() hook initial form values and a submit function that will be called when the form is submitted
    // Note that we have to initialize ALL of fields with values.  
    // These could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell at us.

  const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '', 
    },
    // validate,                                               // Type1 validtns formik inbuild valid method validations  
    validationSchema: Yup.object({                       // Type2 validtns yup based validation scheme if we use these uncomment & comment normal way of validations first
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
       {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/>
       {/* {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null} */}
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
       {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <br/><button type="submit">Submit</button>
    </form>
  );
};

