import React from "react";
import styles from "./Footer.module.scss";
import Button from "../../components/button/Button";
import Clock from "../../components/clock/Clock";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Have a project?</p>
        <h1>Let's talk with me</h1>
      </div>
      <div className={styles.bottom}>
        <Button
          title="Talk with me"
          style={{ backgroundColor: "#111111", color: "white" }}
        />
        <p>
          My local time <Clock />
        </p>
      </div>
    </div>
  );
}
