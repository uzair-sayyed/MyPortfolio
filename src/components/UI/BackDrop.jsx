import React from "react";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.css";

const BackDrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backDrop} onClick={props.handleClick}></div>,
        document.getElementById("backDrop")
      )}
    </>
  );
};

export default BackDrop;
