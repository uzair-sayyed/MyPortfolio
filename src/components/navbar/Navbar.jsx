import React, { useState } from "react";
import NavSocialLogo from "../../assets/Group 1.png";
import NavbarLogo from "../../assets/{Uzair.S}.png";
import "./Navbar.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className='nav'>
      <div
        className='navbar-logo'
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={NavbarLogo} alt='' />
      </div>

      <div className='links'>
        <ul
          id='nav-links'
          className={clicked ? "#nav-links active" : "#nav-links"}
        >
          <li>
            <Link to='home' smooth={true} duration={1000} offset={-10}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to='tech-stack' smooth={true} duration={1000}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='contacts' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <li>
            <a href='https://drive.google.com/uc?export=download&id=18wZCwQN3nwOR_AiXACQlTyyJ3sOafLi6'>
              CV
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/uzair-sayyed-093a4321b/'
              target='_blank'
            >
              <AiFillLinkedin className='linkedin-icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/uzair-sayyed' target='_blank'>
              <AiFillGithub className='github-icon' />
            </a>
          </li>
        </ul>
        <div id='mobile' onClick={handleClick}>
          {clicked ? <RxCross2 id='close' /> : <FaBars id='open' />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
