import React from "react";
import styles from "./Button.module.scss";

export default function Button({ title, style }) {
  return (
    <button style={style} className={styles.button}>
      {title}
    </button>
  );
}
