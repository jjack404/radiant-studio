import React from "react";
import useViewportHeight from "./viewportHeight";
import styles from "./MainComponent.module.css";
import TopMenu from "../TopMenu/TopMenu";
import Window from "../Window/Window";
import Footer from "../Footer/Footer";

const MainComponent = () => {
  const height = useViewportHeight();

  return (
    <main className={styles.mainContainer} style={{ height: `${height}px` }}>
      <TopMenu />
      <div className={styles.windowWrapper}>
        <Window />
      </div>
      <Footer />
    </main>
  );
};

export default MainComponent;
