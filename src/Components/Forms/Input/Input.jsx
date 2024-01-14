import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type={type} name={name} id={name} />
      <p className={styles.error}>Error</p>
    </div>
  );
};
