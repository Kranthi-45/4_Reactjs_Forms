Intro:
-----

Forms are really verbose in React
 Formik is a small library that helps you with the 3 most annoying parts:
    Getting values in and out of form state
    Validation and error messages
    Handling form submission

Why didn't you just use Redux-Form?" Good question.    
    form state is inherently local so tracking it in redux is unnecessary.
    Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE, so input latency decrease if redux app grows bigger.

My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really annoying stuff, and leaves the rest up to you.

By default, Formik will validate after each keystroke (change event), each input’s blur event, as well as prior to submission, dont need to write onchange,submit function code like in tradtional reactform.

Installation:
--------------

-> Install Formik with NPM, Yarn:
    npm install formik --save
        OR
    yarn add formik
-> CDN add the following <script> tag to the bottom of your HTML file:
    <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>    

-> npm install yup --save  or  yarn add yup

                        :
------------------------

- Formik keeps track of your form's state and then exposes it plus a few reusable methods and event handlers (handleChange, handleBlur, and handleSubmit) to your form via props. 
-Instead of managing our form’s values on our own and writing our own custom event handlers for every single input with plain React,
 we can just use useFormik()

- handleChange and handleBlur work exactly as expected--they use a name or id attribute 
   --> ex: Forms.js 

   The "ex:" code above is very explicit about exactly what Formik is doing see below


----------------Reducing boilerplate:

Formik comes with a few extra components to make life easier and less verbose: <Form />, <Field />, and <ErrorMessage />
dont need to write all onchange onsubmit...etc in this
    --> ex: Forms1.js 

-----------------Complementary Packages:

- Feel free to write your own validators or use a 3rd party library.
- Personally, I use Yup for object schema validation.Formik has a special config option / prop for Yup called validationSchema

 YUP:           Yup's validation errors --> pretty object whose keys match values and touched
======
CMD :            npm install yup --save


-useFormik() hook returns to us a goodie bag of form state and helper methods in a variable we call "formik"
------------------------------------------------------------------------------------------------------


validate ---->
-------
    const formik = useFormik({ InitialValues:.. , validate, onSubmit:...})

   helper methods
   --------------
    -handleSubmit: A submission handler
    -handleChange: A change handler to pass to each <input>, <select>, or <textarea>
    -values: Our form’s current values
    --> ex: Forms2.js 

    Visited fields:
    --------------
     after user every keystroke off then error should display for that  -> add onBlur={formik.handleBlur} to form fields
     by default onBlur shows all field errors but should show only given/inputed field’s error message  -> add formik.touched.firstName to resolve the this issue.
    --> ex: Forms2.js 

Schema Validation with Yup --->   
-------------------------       
    const formik = useFormik({ InitialValues:.. , validationSchema:Yup.object({...}), onSubmit:...})
    --> ex: Forms2.js 

    Reducing Boilerplate :
    -------------------- 
    - getFieldProps() to make it faster to wire up inputs & returns the exact group of onChange, onBlur, value, checked for a given field.
    - dont need to write anything again in input tags above all methods just use getFieldProps() it will take care of those
      --> ex: Forms3.js 


Leveraging React Context:
---------------------
Let’s now swap out the useFormik() hook for Formik’s <Formik ...> component/render-prop.
Since it’s a component, we’ll convert the object passed to useFormik() to JSX, with each key becoming a prop.
<Formik> component accepts a function as its children same
  --> ex: Forms4.js 

<Field> component by default will render an <input> component that, given a name prop, will implicitly grab the respective onChange, onBlur, value props
  --> ex: Forms4.js 


Composition, cut down on a lot of prop-drilling & More resuable:
--------------------------------------------------------------
we’re still repeating ourselves with a label, <Field>, and <ErrorMessage> for each of our inputs. 
We can do better with an abstraction, build reusable input primitive components that you can share around your application.
useField() =  <Field> + <ErrorMessage>
// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]  
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)
    <Form>
           <MyTextInput label="First Name" name="firstName" type="text" placeholder="Jane"/>

  --> ex: Forms5.js 

Multi select feature & default selection:
----------------------------------------
  --> ex: Forms6.js 

Manually Triggering Validation :
------------------------------
  --> ex: Forms7.js 



-----------------------------Flavors of Validation:----------------------

Form-level Validation : (2ways)
======================
There are 2 ways to do form-level validation with Formik:
    - <Formik validate> and withFormik({ validate: ... })
    - <Formik validationSchema> and withFormik({ validationSchema: ... })

validate:  <Formik> and withFormik() take a prop/option called validate - Forms.js & Forms1.js
--------

validationSchema:   - Forms2,3,4,5,6
----------------

Field-level Validation  : (2ways)
=======================

validate: Validations done useing validate() also & also done manual trigger validations like clicking button to validate  in Forms7.js 
--------

for Manual trigger validations - Formik using the  validateField, validateForm  methods

------------------------------------------extra Add ons----------------------------------------------------

Disable the submit button while the user has attempted to submit (hint: formik.isSubmitting)
Add a reset button with formik.handleReset or <button type="reset">.
Pre-populate initialValues based on URL query string or props passed to <SignupForm>.
Change the input border color to red when a field has an error and isn’t focused
Add a shake animation to each field when it displays an error and has been visited
Persist form state to the browser’s sessionStorage so that form progress is kept in between page refreshes






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
