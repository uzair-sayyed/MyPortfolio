import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneNumberChangeHandler = (e) => {
    setPhonenumber(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = (e) => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhonenumber("");
      setMessage("");
    }, 5000);
  };
  return (
    <section id='contact' className='contact-section container'>
      <div className='contact-container'>
        <h2>Contact Me</h2>
        <form
          onSubmit={submitHandler}
          action={"https://formspree.io/f/meqbgvpv"}
          method={"post"}
        >
          <div className='group'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={nameChangeHandler}
              type='text'
              name='Name'
              id='name'
              placeholder='Enter Your Name'
              value={name}
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={emailChangeHandler}
              type='email'
              name='Email'
              id='email'
              placeholder='Enter Your Email'
              value={email}
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='phonenumber'>Phone Number</label>
            <input
              onChange={phoneNumberChangeHandler}
              type='number'
              name='Phone Number'
              id='phonenumber'
              placeholder='Enter Your Phone Number'
              value={phonenumber}
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='message'>Message</label>
            <textarea
              onChange={messageChangeHandler}
              name='Message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Enter Your Message'
              value={message}
              required
            ></textarea>
          </div>
          <div className='button-div'>
            <button type='submit'>
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
