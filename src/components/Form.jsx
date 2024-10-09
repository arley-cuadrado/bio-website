import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import Modal from './Modal';

const Form = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({});

  return (

  <div className='width'>
    <h1>Contact me!</h1>
    <Formik
      initialValues={{ name: '', email: '', enquiry: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if(!values.name){
          errors.name = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          //let dataForm = JSON.parse(values, 2);
          alert(JSON.stringify(values, null, 2));
          console.log(`These are the data in the values object:`, values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <div className='required'><strong>{errors.name && touched.name && errors.name}</strong></div>
            <br/>
          </div>
          <div className='input'>
            <label>Email Address</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className='required'><strong>{errors.email && touched.email && errors.email}</strong></div>
            <br/>
          </div>
          <div className='input'>
            <label>Type of enquiry</label>
            <br />
            <div className='input'>
              <Field name="enquiry" as="select" className="my-select my-select-styles">
                <option value="Freelance design project proposal">Freelance design project proposal</option>
                <option value="Freelance development project proposal">Freelance development project proposal</option>
                <option value="Freelance design and development project">Freelance design and development project</option>
              </Field>
              </div>
            {errors.enquiry && touched.enquiry && errors.enquiry}
            <br/>
          </div>
          <div className='input'>
            <label>Your message</label>
            <br />
            <textarea
              type="textarea"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
            <br />
          </div>
          <div className='input'>
            <button className='button' type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>

          { /* Modal Formik children props */}
          { isModalVisible && <Modal data={formValues} /> }
        </form>
      )}
    </Formik>
  </div>
  );
};

export default Form;