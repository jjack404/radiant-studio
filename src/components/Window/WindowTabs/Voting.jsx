import React from "react";
import styles from "./Voting.module.css";

const Voting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.votingWrapper}>
        <div className={styles.votingTopThree}>
          <div className={styles.firstPlace}>
            <img src={'/assets/ex1.png'} alt="1st place"/>
            <div className={styles.first} style={{flexDirection:"row"}}>1<span style={{fontSize:'12px'}}>st</span>
              </div>
          </div>
          <div className={styles.secondThird}>
            <div><img src={'/assets/ex2.png'} alt=""/>
              <div className={styles.second} style={{flexDirection:"row"}}>2<span style={{fontSize:'9px'}}>nd</span>
              </div>
            </div>
            <div><img src={'/assets/ex3.png'} alt=""/>
            <div className={styles.third} style={{flexDirection:"row"}}>3<span style={{fontSize:'9px'}}>rd</span>
            </div>
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
