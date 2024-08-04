import React, { useState, useEffect } from "react";
import "./Main.css";
import portfolioPic from "../../assets/portfolioPic-modified 1.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
import About from "../About/About";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ScrollButton from "../UI/ScrollButton";
function Main() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  return (
    <main id='main' className='container'>
      <div className='main'>
        <div className='profile-details'>
          <h1 className='main-title'>
            Hi👋, <br />
            My name is <br />
            <span className='name'>Uzair Sayyed </span>
            <br />
            I'm a{" "}
            <span className='changing-text'>
              {" "}
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "UI Developer",
                ]}
                loop={0}
                cursor
                cursorStyle=''
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        <div className='profile-photo'>
          {/* <img src={portfolioPic} alt='Profile Pic' /> */}
          <img
            style={{ borderRadius: "50%" }}
            src='https://res.cloudinary.com/daspfwyhz/image/upload/c_crop,g_auto,h_800,w_800/yiseuiihtsvpl3fyx3qi.jpg'
            alt='Profile Pic'
          />
        </div>
      </div>
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
