import React from "react";
import styles from "./Voting.module.css";

const Voting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.votingGalleryContainer}>
        <div className={styles.votingGalleryGrid}>
          <div className={styles.votingTopThree}>
            <div>1
            </div>
            <div>2
            </div>
            <div>3
            </div>
          </div>

          <div className={styles.votingRemainder}>
          <div>4
            </div>
            <div>5
            </div>
            <div>6
            </div>
            </div>
        </div>
      </div>
      </div>);
};

      export default Voting;
