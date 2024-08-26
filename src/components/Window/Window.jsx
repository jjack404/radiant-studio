import React, { useState } from "react";
import styles from "./Window.module.css";
import VoteCreateContainer from "./WindowTabs/VoteCreate/VoteCreateContainer";
import BgRemover from "./WindowTabs/BgRemover/BgRemover";
import SVGConverter from "./WindowTabs/SVGConverter/SVGConverter";

const RadiantsStudio = () => {
  const [activeTab, setActiveTab] = useState("VoteCreate");

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };


  
  const renderContent = () => {
    switch (activeTab) {
      case "VoteCreate":
        return <VoteCreateContainer />;
        case "SVGConverter":
        return <SVGConverter />;
        case "BgRemover":
        return <BgRemover />;
      default:
        return <VoteCreateContainer />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.homeButton}>
          <div className={styles.homeIcon}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.49286H1.00714V6.5H0V5.49286ZM0 6.5H1.00714V7.50714H0V6.5ZM1.00714 4.50715H1.99286V5.49286H1.00714V4.50715ZM1.00714 5.49286H1.99286V6.5H1.00714V5.49286ZM1.00714 6.5H1.99286V7.50714H1.00714V6.5ZM1.99286 3.5H3V4.50715H1.99286V3.5ZM1.99286 4.50715H3V5.49286H1.99286V4.50715ZM1.99286 5.49286H3V6.5H1.99286V5.49286ZM1.99286 6.5H3V7.50714H1.99286V6.5ZM1.99286 7.50714H3V8.49286H1.99286V7.50714ZM1.99286 8.49286H3V9.5H1.99286V8.49286ZM1.99286 9.5H3V10.5071H1.99286V9.5ZM1.99286 10.5071H3V11.4929H1.99286V10.5071ZM1.99286 11.4929H3V12.5H1.99286V11.4929ZM3 2.49285H4.00714V3.5H3V2.49285ZM3 3.5H4.00714V4.50715H3V3.5ZM3 4.50715H4.00714V5.49286H3V4.50715ZM3 5.49286H4.00714V6.5H3V5.49286ZM3 6.5H4.00714V7.50714H3V6.5ZM3 9.5H4.00714V10.5071H3V9.5ZM3 10.5071H4.00714V11.4929H3V10.5071ZM3 11.4929H4.00714V12.5H3V11.4929ZM4.00714 1.50715H4.99286V2.49285H4.00714V1.50715ZM4.00714 2.49285H4.99286V3.5H4.00714V2.49285ZM4.00714 3.5H4.99286V4.50715H4.00714V3.5ZM4.00714 4.50715H4.99286V5.49286H4.00714V4.50715ZM4.00714 5.49286H4.99286V6.5H4.00714V5.49286ZM4.00714 6.5H4.99286V7.50714H4.00714V6.5ZM4.00714 9.5H4.99286V10.5071H4.00714V9.5ZM4.00714 10.5071H4.99286V11.4929H4.00714V10.5071ZM4.00714 11.4929H4.99286V12.5H4.00714V11.4929ZM4.99286 0.5H6V1.50715H4.99286V0.5ZM4.99286 1.50715H6V2.49285H4.99286V1.50715ZM4.99286 2.49285H6V3.5H4.99286V2.49285ZM4.99286 3.5H6V4.50715H4.99286V3.5ZM4.99286 4.50715H6V5.49286H4.99286V4.50715ZM4.99286 5.49286H6V6.5H4.99286V5.49286ZM4.99286 6.5H6V7.50714H4.99286V6.5ZM4.99286 7.50714H6V8.49286H4.99286V7.50714ZM4.99286 8.49286H6V9.5H4.99286V8.49286ZM4.99286 9.5H6V10.5071H4.99286V9.5ZM4.99286 10.5071H6V11.4929H4.99286V10.5071ZM4.99286 11.4929H6V12.5H4.99286V11.4929ZM6 0.5H7.00714V1.50715H6V0.5ZM6 1.50715H7.00714V2.49285H6V1.50715ZM6 2.49285H7.00714V3.5H6V2.49285ZM6 3.5H7.00714V4.50715H6V3.5ZM6 4.50715H7.00714V5.49286H6V4.50715ZM6 5.49286H7.00714V6.5H6V5.49286ZM6 6.5H7.00714V7.50714H6V6.5ZM6 7.50714H7.00714V8.49286H6V7.50714ZM6 8.49286H7.00714V9.5H6V8.49286ZM6 9.5H7.00714V10.5071H6V9.5ZM6 10.5071H7.00714V11.4929H6V10.5071ZM6 11.4929H7.00714V12.5H6V11.4929ZM7.00714 1.50715H7.99286V2.49285H7.00714V1.50715ZM7.00714 2.49285H7.99286V3.5H7.00714V2.49285ZM7.00714 3.5H7.99286V4.50715H7.00714V3.5ZM7.00714 4.50715H7.99286V5.49286H7.00714V4.50715ZM7.00714 5.49286H7.99286V6.5H7.00714V5.49286ZM7.00714 6.5H7.99286V7.50714H7.00714V6.5ZM7.00714 9.5H7.99286V10.5071H7.00714V9.5ZM7.00714 10.5071H7.99286V11.4929H7.00714V10.5071ZM7.00714 11.4929H7.99286V12.5H7.00714V11.4929ZM7.99286 2.49285H9V3.5H7.99286V2.49285ZM7.99286 3.5H9V4.50715H7.99286V3.5ZM7.99286 4.50715H9V5.49286H7.99286V4.50715ZM7.99286 5.49286H9V6.5H7.99286V5.49286ZM7.99286 6.5H9V7.50714H7.99286V6.5ZM7.99286 9.5H9V10.5071H7.99286V9.5ZM7.99286 10.5071H9V11.4929H7.99286V10.5071ZM7.99286 11.4929H9V12.5H7.99286V11.4929ZM9 3.5H10.0071V4.50715H9V3.5ZM9 4.50715H10.0071V5.49286H9V4.50715ZM9 5.49286H10.0071V6.5H9V5.49286ZM9 6.5H10.0071V7.50714H9V6.5ZM9 7.50714H10.0071V8.49286H9V7.50714ZM9 8.49286H10.0071V9.5H9V8.49286ZM9 9.5H10.0071V10.5071H9V9.5ZM9 10.5071H10.0071V11.4929H9V10.5071ZM9 11.4929H10.0071V12.5H9V11.4929ZM10.0071 4.50715H10.9929V5.49286H10.0071V4.50715ZM10.0071 5.49286H10.9929V6.5H10.0071V5.49286ZM10.0071 6.5H10.9929V7.50714H10.0071V6.5ZM10.9929 5.49286H12V6.5H10.9929V5.49286ZM10.9929 6.5H12V7.50714H10.9929V6.5Z" fill="#0F0E0C" />
            </svg>
          </div>
        </button>
        <button className={styles.dateBtn}>
          <div className={styles.dateContainer}>
            <div className={styles.date}>
              <span>1/10/24</span>
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.78 6.64961V5.37701H2.52V4.12961H1.26V2.86961H0V0.349609H1.26V1.60961H2.52V2.86961H3.78V4.12961H5.04V2.86961H6.3V1.60961H7.56V0.349609H8.82V2.86961H7.56V4.12961H6.3V5.37701H5.04V6.64961H3.78Z" fill="#0F0E0C" />
              </svg>
            </div>
          </div>
        </button>
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerLine} />
          <div className={styles.dividerLine} />
        </div>
        <div className={styles.studioName}>Radiants Studio</div>
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerLine} />
          <div className={styles.dividerLine} />
        </div>
        <button className={styles.helpButton}>Help</button>
        <button className={styles.userConnect}>
          <div className={styles.userContainer}>
            <div className={styles.userId}>Connect</div>
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.25 5.5H1.09826V6.27897H0.25V5.5ZM1.09826 4.72104H1.94653V5.5H1.09826V4.72104ZM1.09826 5.5H1.94653V6.27897H1.09826V5.5ZM1.09826 8.59928H1.94653V9.36168H1.09826V8.59928ZM1.09826 9.36168H1.94653V10.1406H1.09826V9.36168ZM1.94653 3.95865H2.77674V4.72104H1.94653V3.95865ZM1.94653 4.72104H2.77674V5.5H1.94653V4.72104ZM1.94653 5.5H2.77674V6.27897H1.94653V5.5ZM1.94653 7.04135H2.77674V7.82031H1.94653V7.04135ZM1.94653 7.82031H2.77674V8.59928H1.94653V7.82031ZM1.94653 8.59928H2.77674V9.36168H1.94653V8.59928ZM2.77674 3.17969H3.625V3.95865H2.77674V3.17969ZM2.77674 3.95865H3.625V4.72104H2.77674V3.95865ZM2.77674 4.72104H3.625V5.5H2.77674V4.72104ZM2.77674 5.5H3.625V6.27897H2.77674V5.5ZM2.77674 6.27897H3.625V7.04135H2.77674V6.27897ZM2.77674 7.04135H3.625V7.82031H2.77674V7.04135ZM2.77674 7.82031H3.625V8.59928H2.77674V7.82031ZM3.625 2.40073H4.47326V3.17969H3.625V2.40073ZM3.625 3.17969H4.47326V3.95865H3.625V3.17969ZM3.625 3.95865H4.47326V4.72104H3.625V3.95865ZM3.625 4.72104H4.47326V5.5H3.625V4.72104ZM3.625 5.5H4.47326V6.27897H3.625V5.5ZM3.625 6.27897H4.47326V7.04135H3.625V6.27897ZM3.625 7.04135H4.47326V7.82031H3.625V7.04135ZM4.47326 1.63834H5.30347V2.40073H4.47326V1.63834ZM4.47326 2.40073H5.30347V3.17969H4.47326V2.40073ZM4.47326 3.17969H5.30347V3.95865H4.47326V3.17969ZM4.47326 4.72104H5.30347V5.5H4.47326V4.72104ZM4.47326 5.5H5.30347V6.27897H4.47326V5.5ZM4.47326 6.27897H5.30347V7.04135H4.47326V6.27897ZM5.30347 0.859375H6.15174V1.63834H5.30347V0.859375ZM5.30347 1.63834H6.15174V2.40073H5.30347V1.63834ZM5.30347 4.72104H6.15174V5.5H5.30347V4.72104ZM5.30347 5.5H6.15174V6.27897H5.30347V5.5ZM6.15174 4.72104H7V5.5H6.15174V4.72104Z" fill="#0F0E0C" />
            </svg>

          </div>
        </button>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            <div className={styles.sidebar}>
              <div className={styles.menu}>
                <div className={styles.menuItemWrap}>
                <button
                  onClick={() => handleButtonClick("VoteCreate")}
                  className={`${styles.menuItem} ${activeTab === "VoteCreate" ? styles.active : ""}`}
                >
                  <div><img src={"assets/create-icon.png"}
                    className={styles.tabIcon}
                  /></div>
                </button>
                <button
                  onClick={() => handleButtonClick("SVGConverter")}
                  className={`${styles.menuItem} ${activeTab === "SVGConverter" ? styles.active : ""}`}
                >
                  <div><img src={"assets/svg-op-icon.png"}
                    className={styles.tabIcon}
                  /></div>
                </button>
                <button
                  onClick={() => handleButtonClick("BgRemover")}
                  className={`${styles.menuItem} ${activeTab === "BgRemover" ? styles.active : ""}`}
                >
                  <div><img src={"assets/bg-remover-icon.png"}
                    className={styles.tabIcon}
                  /></div>
                </button>
                </div>
                <div className={styles.sidebarLogo}>
                  <img src={"./assets/logo.png"} />
                </div>

              </div>
            </div>
            <div className={styles.contentArea}>
              {renderContent()}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default RadiantsStudio;