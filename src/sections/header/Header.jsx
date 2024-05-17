import React from "react";
import styles from "./Header.module.scss";
import Button from "../../components/button/Button";
import Clock from "../../components/clock/Clock";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <img
          src="https://framerusercontent.com/images/FSCiDgMokoewxICdcDK10e3uVA.png"
          alt=""
          className={styles.logo}
        />
        <span>Home</span>
        <span>Playground</span>
        <span>Services</span>
        <span>Case studies</span>
        <span>About me</span>
        <span>
          <div style={{ color: "#808080", fontSize: "14px" }}>
            Casablanca, Morocco
          </div>
          <div>
            <Clock />
          </div>
        </span>
        <div>
          <Button title="Slot Booked" />
          <Button title="+" />
        </div>
      </div>
    </div>
  );
}
