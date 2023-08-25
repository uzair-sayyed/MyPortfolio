import React from "react";
import "./Main.css";
import MainPic from "../../assets/50353683 1.png";
function Main() {
  return (
    <main id='main'>
      <div className='main'>
        <div>
          <h1 className='main-title'>
            Hi👋, <br />
            My name is <br />
            <span className='name'>Uzair Sayyed </span>
            <br />
            I'm a Frontend Developer
          </h1>
        </div>
        <div>
          <img src={MainPic} alt='Profile Pic' />
        </div>
      </div>
    </main>
  );
}

export default Main;
