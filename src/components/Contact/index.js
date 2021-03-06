import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';



function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }

  };

  return (
    <section>
            <div className='row'>
            <h2 className='column sectionHeader'>
              Contact Me
            </h2>
            </div>
    <div className='row'>
      <form className='' id="contact-form" onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="name">Name:</label>
          <input className='form' type="text" name="name" placeholder='Your Name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div className=''>
          <label htmlFor="email">Email address:</label>
          <input className='form' type="email" name="email" placeholder='Your Name' defaultValue={email} onBlur={handleChange} />
        </div>
        <div className=''>
          <label htmlFor="message">Message:</label>
          <textarea className='form' name="message" rows="5" placeholder='What would you like to ask?' defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className='btn'>
        <button className='' data-testid="button" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
