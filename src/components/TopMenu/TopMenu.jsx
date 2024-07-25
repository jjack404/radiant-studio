
import React from "react";
import styles from "./TopMenu.module.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import StartButton from "./StartButton/StartButton";

const MainComponent = () => (
  <main className={styles.mainContainer}>
    <div className={styles.topMenu}>
      <NavigationBar />
      <StartButton />
      </div>
      <div className={styles.topLogo}>
      <img alt="logo" src={"./assets/logo.png"} />
        </div>
  </main>
);

export default MainComponent;
