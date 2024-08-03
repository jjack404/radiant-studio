import React from "react";
import styles from "./MyStudio.module.css";

const MyStudio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.myStudioWrapper}>
        <h2>My Studio</h2>
        <p>Welcome to the My Studio tab.</p>
      </div>
    </div>
  );
};

export default MyStudio;
