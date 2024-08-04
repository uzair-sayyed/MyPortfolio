import React, { useState } from "react";
import NavSocialLogo from "../../assets/Group 1.png";
import { NavLink } from "react-router-dom";
import NavbarLogo from "../../assets/{Uzair.S}.png";
import { NavLink as Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";
import DarkMode from "../UI/DarkMode";
import BackDrop from "../UI/BackDrop";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className='nav'>
      <div className='nav-content container'>
        <Link to='/'>
          <div
            className='logo'
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <img src={NavbarLogo} alt='' />
          </div>
        </Link>
        <DarkMode />
        <div className='group'>
          <ul
            id='nav-links'
            className={`${clicked ? "#nav-links active" : "#nav-links"}`}
          >
            <li>
              <NavLink to='/' onClick={handleNavigationClick}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={handleNavigationClick}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to='/tech-stack' onClick={handleNavigationClick}>
                TECH STACK
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' onClick={handleNavigationClick}>
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={handleNavigationClick}>
                CONTACT
              </NavLink>
            </li>
            <li className='cv'>
              <a href='https://drive.google.com/uc?export=download&id=1ZfDARdfaBhiGqo1vPey7hkn6xIa1UzfJ'>
                CV
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/uzair-sayyed-093a4321b/'
                target='_blank'
                onClick={handleNavigationClick}
              >
                <AiFillLinkedin className='linkedin-icon' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/uzair-sayyed'
                target='_blank'
                onClick={handleNavigationClick}
              >
                <AiFillGithub className='github-icon' />
              </a>
            </li>
          </ul>
          <div className='mobile'>
            <p className='responsive-contact last-para'>
              <a href='https://drive.google.com/uc?export=download&id=1ZfDARdfaBhiGqo1vPey7hkn6xIa1UzfJ'>
                CV
              </a>
            </p>
            <p className='responsive-contact last-para'>
              <NavLink to='contact'>Contact</NavLink>
            </p>
            <p className='last-para' onClick={handleClick}>
              {clicked ? <RxCross2 id='close' /> : <FaBars id='open' />}
            </p>
          </div>
        </div>
      </div>
      {clicked && <BackDrop handleClick={handleClick} />}
    </nav>
  );
}

export default Navbar;
