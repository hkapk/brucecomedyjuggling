import React, { useState } from 'react';
import Swal from 'sweetalert2';


import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {

      Swal.fire({
        title: "Thank you",
        text: "Your message has been sent.",
        icon: "success",
      });

      //reset form on submit
      const form = document.getElementById('contact-form');
      form.reset();
    }
  };



  const [formState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log('Form', formState);
  //   }
  // };

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
  };

  return (
    <section>
      <p id="contact"></p>
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="name">Name:</label>
          <div>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
        </div>
        <div className="input">
          <div>
            <label htmlFor="email">Email address:</label>
          </div>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="input">
          <div>
            <label htmlFor="message">Message:</label>
          </div>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;