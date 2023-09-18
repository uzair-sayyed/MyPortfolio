import React from "react";
import "./Main.css";
import MyPic from "../../assets/uzair-removebg-preview 1.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
function Main() {
  return (
    <main id='main' className='container'>
      <div className='main'>
        <div>
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
        <div>
          <img src={MyPic} alt='Profile Pic' />
        </div>
      </div>
    </main>
  );
}

export default Main;
