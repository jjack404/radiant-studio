import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeWrapper}>
        <h2>Home</h2>
        <p>Welcome to the Home tab.</p>
      </div>
    </div>
  );
};

export default Home;
