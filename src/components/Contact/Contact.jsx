import React, { useState, useEffect } from "react";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [phonenumber, setPhonenumber] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState();
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      name.trim().length >= 4 &&
        email.includes("@") &&
        phonenumber.toString().trim().length >= 8 &&
        phonenumber.toString().trim().length < 11 &&
        message.trim().length >= 20
    );
  }, [name, email, phonenumber, message]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const validateNameHandler = () => {
    setNameIsValid(name.trim().length >= 4);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const validateEmailHandler = () => {
    setEmailIsValid(email.includes("@"));
  };

  const phoneNumberChangeHandler = (e) => {
    setPhonenumber(e.target.value);
  };
  const validatePhoneHandler = () => {
    setPhoneIsValid(
      phonenumber.toString().trim().length >= 8 &&
        phonenumber.toString().trim().length < 11
    );
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const validateMessageHandler = () => {
    setMessageIsValid(message.trim().length >= 20);
  };
  const submitHandler = (e) => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhonenumber("");
      setMessage("");
    }, 1500);
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
          <div
            className={`${"group"} ${nameIsValid === false ? "invalid" : ""}`}
          >
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='Name'
              id='name'
              placeholder='Enter Your Name'
              onBlur={validateNameHandler}
              onChange={nameChangeHandler}
              value={name}
              required
            />
          </div>
          <div
            className={`${"group"} ${emailIsValid === false ? "invalid" : ""}`}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='Email'
              id='email'
              placeholder='Enter Your Email'
              value={email}
              onBlur={validateEmailHandler}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div
            className={`${"group"} ${phoneIsValid === false ? "invalid" : ""}`}
          >
            <label htmlFor='phonenumber'>Phone Number</label>
            <input
              type='number'
              name='Phone Number'
              id='phonenumber'
              placeholder='Enter Your Phone Number'
              onChange={phoneNumberChangeHandler}
              onBlur={validatePhoneHandler}
              value={phonenumber}
              required
            />
          </div>
          <div
            className={`${"group"} ${
              messageIsValid === false ? "invalid" : ""
            }`}
          >
            <label htmlFor='message'>Message</label>
            <textarea
              name='Message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Enter Your Message'
              value={message}
              onChange={messageChangeHandler}
              onBlur={validateMessageHandler}
              required
            ></textarea>
          </div>
          <div className='button-div'>
            <button type='submit' disabled={!formIsValid}>
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
