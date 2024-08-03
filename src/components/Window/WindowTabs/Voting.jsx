import React from "react";
import styles from "./Voting.module.css";

const Voting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.votingGalleryContainer}>
        <div className={styles.votingTopThree}>
          <div className={styles.firstPlace}>
            <img src={'/assets/ex1.png'} alt="1st place"/>
            <span>1<sup>st</sup>
            </span>
          </div>
          <div className={styles.secondThird}>
            <div><img src={'/assets/ex2.png'} alt=""/>
              <span>2<sup>nd</sup>
              </span>
            </div>
            <div><img src={'/assets/ex3.png'} alt=""/>
              <span>3<sup>rd</sup>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.votingRemainder}>
          <div className={styles.remainderLeft}>
            <div>4.
            </div>
            <div>5.
            </div>
            <div>6.
            </div>
            <div>7.
            </div>
          </div>
          <div className={styles.remainderRight}>
            <div>8.
            </div>
            <div>9.
            </div>
            <div>10.
            </div>
            <div><span>see more</span></div>
          </div>
        </div>
      </div>
    </div>);
};

export default Voting;
