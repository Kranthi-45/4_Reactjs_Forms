import React from 'react';
 import { ErrorMessage, Field, Form, Formik } from 'formik';
 import * as Yup from 'yup';
 import "./styles.css";

 export const SignupForm = () => {
   
        // <textarea className="form-textarea"/></textarea> 
        //  <Field name="message" as="textarea" className="form-textarea" />

        // <select className="my-select"/>
        // <Field name="colors" as="select" className="my-select">
   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
        {/* -------------------------------------------1 type ---------------------------------------------------------- */}
       {/* {formik => (
         <form onSubmit={formik.handleSubmit}>
           <label htmlFor="firstName">First Name</label>
           <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
           {formik.touched.firstName && formik.errors.firstName ? (
             <div>{formik.errors.firstName}</div>
           ) : null}
 
           <label htmlFor="lastName">Last Name</label>
           <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
           {formik.touched.lastName && formik.errors.lastName ? (
             <div>{formik.errors.lastName}</div>
           ) : null}
 
           <label htmlFor="email">Email Address</label>
           <input id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <div>{formik.errors.email}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )} */}
       
        {/* -------------------------------------------2 type ---------------------------------------------------------- */}

        <Form>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <ErrorMessage name="firstName" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />

         <label htmlFor="firstName">First Name</label>
        <Field name="firstName" className="form-input" placeholder="Jane" />
 
        <label htmlFor="message">Address(text area)</label>
        <Field name="message" as="textarea" className="form-textarea" />
 
        <label htmlFor="colors">Colors Dropdown</label>
        <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </Field>
 
         <button type="submit">Submit</button>
       </Form>

     </Formik>
   );
 };