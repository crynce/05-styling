import React from "react";
import styles from "./Button.modules.css";

// const Button = styled.button``; => this is called tagged template literal
// const Button = styled.button``;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
