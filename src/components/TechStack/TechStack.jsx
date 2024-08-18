import React from "react";
import "./TechStack.css";
import htmlLogo from "../../assets/vscode-icons_file-type-html.png";
import cssLogo from "../../assets/vscode-icons_file-type-css.png";
import jsLogo from "../../assets/vscode-icons_file-type-js-official.png";
import gitHubLogo from "../../assets/akar-icons_github-fill.png";
import gitLogo from "../../assets/logos_git-icon.png";
import reactLogo from "../../assets/logos_react.png";
import vscodeLogo from "../../assets/vscode-icons_file-type-vscode.png";
import reduxLogo from "../../assets/redux.png";
import sassLogo from "../../assets/logos_sass.png";
import boostrapLogo from "../../assets/logos_bootstrap.png";
import jqueryLogo from "../../assets/logos_jquery.png";
import tailwindLogo from "../../assets/tailwind.png";

function TechStack() {
  return (
    <section className='tech-stack container' id='tech-stack'>
      <div className='tech-stack-header'>
        <h2>My Tech Stack</h2>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <div className='tech-stack-container'>
        <div>
          <img src={htmlLogo} alt='html' />
          <h3>HTML</h3>
        </div>
        <div>
          <img src={cssLogo} alt='css' />
          <h3>CSS</h3>
        </div>
        <div>
          <img src={jsLogo} alt='js' />
          <h3>Javascript</h3>
        </div>
        <div>
          <img src={reactLogo} alt='react' />
          <h3>ReactJS</h3>
        </div>
        <div>
          <img src={reduxLogo} alt='redux' />
          <h3>Redux</h3>
        </div>
        <div>
          <img src={boostrapLogo} alt='bootstrap' />
          <h3>Bootstrap</h3>
        </div>
        <div>
          <img src={tailwindLogo} alt='bootstrap' />
          <h3>Tailwind</h3>
        </div>
        <div>
          <img src={jqueryLogo} alt='jquery' />
          <h3>Jquery</h3>
        </div>
        <div>
          <img src={sassLogo} alt='sass' />
          <h3>SASS</h3>
        </div>
        <div>
          <img src={vscodeLogo} alt='vsCode' />
          <h3>VS Code</h3>
        </div>
        <div>
          <img src={gitHubLogo} alt='github' />
          <h3>Github</h3>
        </div>
        <div>
          <img src={gitLogo} alt='git' />
          <h3>Git</h3>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
