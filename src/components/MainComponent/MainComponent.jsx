import React from "react";
import styles from "./MainComponent.module.css";
import TopMenu from "../TopMenu/TopMenu";
import Window from "../Window/Window";
import Footer from "../Footer/Footer";

const MainComponent = () => {
  return (
    <main className={styles.mainContainer}>
      <TopMenu />
      <div className={styles.windowWrapper}>
        <Window />
      </div>
      <Footer />
    </main>
  );
};

export default MainComponent;
