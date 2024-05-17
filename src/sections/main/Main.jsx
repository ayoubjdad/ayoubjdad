import React from "react";
import styles from "./Main.module.scss";
import Button from "../../components/button/Button";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div>
          <h1 className={styles.title}>
            Hello!
            <br /> I’m Ayoub Jdad
          </h1>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTop}>
            <h3 className={styles.text}>
              A Frontend developer based in Casablanca, Morocco.
            </h3>
            <p>Passionate creating great experiences for Digital Product</p>
          </div>
          <div className={styles.rightBottom}>
            <Button
              title="Talk with me"
              style={{ backgroundColor: "#111111", color: "white" }}
            />
            <Button
              title="See my work"
              style={{ backgroundColor: "white", border: "1px solid #dde0d1" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
