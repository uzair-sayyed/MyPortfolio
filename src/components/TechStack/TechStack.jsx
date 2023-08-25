import React from "react";
import "./TechStack.css";
import htmlLogo from "../../assets/vscode-icons_file-type-html.png";
import cssLogo from "../../assets/vscode-icons_file-type-css.png";
import jsLogo from "../../assets/vscode-icons_file-type-js-official.png";
import gitHubLogo from "../../assets/akar-icons_github-fill.png";
import gitLogo from "../../assets/logos_git-icon.png";
import reactLogo from "../../assets/logos_react.png";
import vscodeLogo from "../../assets/vscode-icons_file-type-vscode.png";

function TechStack() {
  return (
    <section className='tech-stack container' id='tech-stack'>
      <div className='tech-stack-header'>
        <h2>My Tech Stack</h2>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <div className='tech-stack-container'>
        <img src={htmlLogo} alt='html' />
        <img src={cssLogo} alt='css' />
        <img src={jsLogo} alt='js' />
        <img src={reactLogo} alt='react' />
        <img src={vscodeLogo} alt='vsCode' />
        <img src={gitHubLogo} alt='github' />
        <img src={gitLogo} alt='git' />
      </div>
    </section>
  );
}

export default TechStack;
