import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import NavbarLogo from "../../assets/{Uzair.S}.png";

function Footer() {
  return (
    <footer className='container'>
      <div className='footer-1'>
        <img src={NavbarLogo} />
        <div>
          <span className='info-1'> +91 9321656698</span>
          <span className='info-2'> sayeduzair54321@gmail.com</span>
          <span>
            <a
              href='https://www.linkedin.com/in/uzair-sayyed-093a4321b/'
              target='_blank'
            >
              <AiFillLinkedin className='footer-social-icon' />
            </a>
          </span>
          <span>
            <a href='https://github.com/uzair-sayyed' target='_blank'>
              <AiFillGithub className='footer-social-icon' />
            </a>
          </span>
        </div>
      </div>
      <div className='footer-2'>
        <h4>
          Designed and built by <span>Uzair Sayyed</span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
