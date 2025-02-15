import React, { useState } from "react";
import styles from "./Window.module.css";
import VoteCreateContainer from "./WindowTabs/VoteCreate/VoteCreateContainer";
import BgRemover from "./WindowTabs/BgRemover/BgRemover";
import SvgConverter from "./WindowTabs/SvgConverter/SvgConverter";

const RadiantsStudio = () => {
  const [activeTab, setActiveTab] = useState("VoteCreate");

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };



  const renderContent = () => {
    switch (activeTab) {
      case "VoteCreate":
        return <VoteCreateContainer />;
      case "SvgConverter":
        return <SvgConverter />;
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
        <button className={styles.helpButton}>
          <span className={styles.helpText}>Help</span>
          <div className={styles.helpIconWrap}>
            <svg
              className={styles.helpIcon} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.0752 9.77538H29.5452V6.72538H28.0252V5.20538H26.4952V3.68538H23.4552V2.15538H20.4052V0.635376H12.7852V2.15538H9.73522V3.68538H6.68521V5.20538H5.16522V6.72538H3.64521V9.77538H2.11521V12.8254H0.595215V20.4454H2.11521V23.4954H3.64521V26.5354H5.16522V28.0654H6.68521V29.5854H9.73522V31.1154H12.7852V32.6354H20.4052V31.1154H23.4552V29.5854H26.4952V28.0654H28.0252V26.5354H29.5452V23.4954H31.0752V20.4454H32.5952V12.8254H31.0752V9.77538ZM12.7852 6.72538H14.3052V5.20538H18.8852V6.72538H20.4052V11.3054H18.8852V12.8254H14.3052V11.3054H12.7852V6.72538ZM23.4552 26.5354H21.9252V28.0654H14.3052V26.5354H12.7852V15.8754H14.3052V14.3454H18.8852V15.8754H20.4052V23.4954H21.9252V25.0154H23.4552V26.5354Z" fill="#0f0e0c" />
            </svg>

          </div></button>
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
                    <div><svg
                      className={styles.tabIcon}
                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1616_21105)">
                        <path d="M23.9994 1.14062H22.8594V4.56813H23.9994V1.14062Z" fill="#0f0e0c" />
                        <path d="M22.8604 4.56836H21.7129V6.85586H22.8604V4.56836Z" fill="#0f0e0c" />
                        <path d="M22.8598 0.000976562H20.5723V1.14098H22.8598V0.000976562Z" fill="#0f0e0c" />
                        <path d="M21.7123 6.85645H20.5723V9.14394H21.7123V6.85645Z" fill="#0f0e0c" />
                        <path d="M20.5733 9.14355H19.4258V11.4311H20.5733V9.14355Z" fill="#0f0e0c" />
                        <path d="M20.5733 1.14062H19.4258V3.42813H20.5733V1.14062Z" fill="#0f0e0c" />
                        <path d="M19.4252 11.4307H18.2852V13.7107H19.4252V11.4307Z" fill="#0f0e0c" />
                        <path d="M19.4252 3.42871H18.2852V5.71621H19.4252V3.42871Z" fill="#0f0e0c" />
                        <path d="M18.2845 17.1455H17.1445V20.573H18.2845V17.1455Z" fill="#0f0e0c" />
                        <path d="M18.2845 13.7109H17.1445V15.9984H18.2845V13.7109Z" fill="#0f0e0c" />
                        <path d="M18.2845 5.71582H17.1445V8.00332H18.2845V5.71582Z" fill="#0f0e0c" />
                        <path d="M17.1436 8.00391H15.9961V10.2839H17.1436V8.00391Z" fill="#0f0e0c" />
                        <path d="M15.9981 19.4255H14.8581V20.573H13.7181V19.4255H12.5706V18.2855H11.4306V19.4255H10.2831V17.1455H9.14312V20.573H8.00312V21.713H6.85562V22.853H1.14062V24.0005H13.7181V22.853H15.9981V21.713H17.1456V20.573H15.9981V19.4255Z" fill="#0f0e0c" />
                        <path d="M17.1449 15.998H14.8574V17.1455H17.1449V15.998Z" fill="#0f0e0c" />
                        <path d="M15.9974 10.2832H14.8574V12.5707H15.9974V10.2832Z" fill="#0f0e0c" />
                        <path d="M14.8572 15.9988V12.5713H13.7172V14.8588H11.4297V15.9988H14.8572Z" fill="#0f0e0c" />
                        <path d="M11.4287 15.998H10.2812V17.1455H11.4287V15.998Z" fill="#0f0e0c" />
                        <path d="M11.4287 9.14355H10.2812V10.2836H11.4287V9.14355Z" fill="#0f0e0c" />
                        <path d="M10.2826 10.2832H9.14258V11.4307H10.2826V10.2832Z" fill="#0f0e0c" />
                        <path d="M10.2831 8.00391H1.14062V9.14391H10.2831V8.00391Z" fill="#0f0e0c" />
                        <path d="M8.00297 17.1455H6.85547V18.2855H8.00297V17.1455Z" fill="#0f0e0c" />
                        <path d="M9.14234 11.4307H5.71484V12.5707H9.14234V11.4307Z" fill="#0f0e0c" />
                        <path d="M6.85484 18.2861H5.71484V19.4261H6.85484V18.2861Z" fill="#0f0e0c" />
                        <path d="M6.85523 15.998H3.42773V17.1455H6.85523V15.998Z" fill="#0f0e0c" />
                        <path d="M5.71523 12.5713H3.42773V13.7113H5.71523V12.5713Z" fill="#0f0e0c" />
                        <path d="M5.71461 19.4258H2.28711V20.5733H5.71461V19.4258Z" fill="#0f0e0c" />
                        <path d="M3.42711 13.7109H2.28711V15.9984H3.42711V13.7109Z" fill="#0f0e0c" />
                        <path d="M2.28813 20.5732H1.14062V21.7132H2.28813V20.5732Z" fill="#0f0e0c" />
                        <path d="M1.14 21.7139H0V22.8539H1.14V21.7139Z" fill="#0f0e0c" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1616_21105">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    </div>
                  </button>
                  <button
                    onClick={() => handleButtonClick("SvgConverter")}
                    className={`${styles.menuItem} ${activeTab === "SvgConverter" ? styles.active : ""}`} >
                    <div>
                      <svg
                        className={styles.tabIcon}
                        viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.9985 8.01537H29.4685V9.53537H30.9985V8.01537Z" fill="#0f0e0c" />
                        <path d="M29.4685 9.53537H27.9485V11.0654H29.4685V9.53537Z" fill="#0f0e0c" />
                        <path d="M29.4685 6.49538H27.9485V8.01538H29.4685V6.49538Z" fill="#0f0e0c" />
                        <path d="M27.9485 8.01537H26.4285V9.53537H27.9485V8.01537Z" fill="#0f0e0c" />
                        <path d="M26.4285 27.8254V26.2954H27.9485V24.7754H26.4285V23.2554H24.8985V24.7754H23.3785V26.2954H24.8985V27.8254H26.4285Z" fill="#0f0e0c" />
                        <path d="M26.4285 12.5854H24.8985V15.6354H26.4285V12.5854Z" fill="#0f0e0c" />
                        <path d="M24.8985 15.6354H23.3785V17.1554H24.8985V15.6354Z" fill="#0f0e0c" />
                        <path d="M24.8985 3.44537H23.3785V4.96537H24.8985V3.44537Z" fill="#0f0e0c" />
                        <path d="M23.3785 17.1554H21.8485V18.6854H23.3785V17.1554Z" fill="#0f0e0c" />
                        <path d="M23.3785 4.96536H21.8485V6.49536H23.3785V4.96536Z" fill="#0f0e0c" />
                        <path d="M21.8485 18.6854H20.3285V20.2054H21.8485V18.6854Z" fill="#0f0e0c" />
                        <path d="M21.8485 6.49538H20.3285V8.01538H21.8485V6.49538Z" fill="#0f0e0c" />
                        <path d="M20.3285 20.2054H18.8085V21.7254H20.3285V20.2054Z" fill="#0f0e0c" />
                        <path d="M20.3285 8.01537H18.8085V9.53537H20.3285V8.01537Z" fill="#0f0e0c" />
                        <path d="M18.8085 29.3454H17.2785V30.8754H18.8085V29.3454Z" fill="#0f0e0c" />
                        <path d="M18.8085 21.7254H17.2785V23.2554H18.8085V21.7254Z" fill="#0f0e0c" />
                        <path d="M17.2785 9.53537V11.0654H15.7585V12.5854H24.8985V11.0654H18.8085V9.53537H17.2785Z" fill="#0f0e0c" />
                        <path d="M17.2785 23.2554H15.7585V24.7754H17.2785V23.2554Z" fill="#0f0e0c" />
                        <path d="M24.8985 1.91537V3.44537H26.4285V0.39537H14.2385V1.91537H24.8985Z" fill="#0f0e0c" />
                        <path d="M15.7585 24.7754H14.2385V26.2954H15.7585V24.7754Z" fill="#0f0e0c" />
                        <path d="M14.2385 26.2954H12.7085V27.8254H14.2385V26.2954Z" fill="#0f0e0c" />
                        <path d="M14.2385 1.91537H12.7085V3.44537H14.2385V1.91537Z" fill="#0f0e0c" />
                        <path d="M12.7085 27.8254H11.1885V29.3454H12.7085V27.8254Z" fill="#0f0e0c" />
                        <path d="M12.7085 15.6354H3.56854V17.1554H11.1885V20.2054H12.7085V15.6354Z" fill="#0f0e0c" />
                        <path d="M12.7085 3.44537H11.1885V4.96537H12.7085V3.44537Z" fill="#0f0e0c" />
                        <path d="M11.1885 29.3454H9.65854V30.8754H11.1885V29.3454Z" fill="#0f0e0c" />
                        <path d="M11.1885 20.2054H9.65854V24.7754H11.1885V20.2054Z" fill="#0f0e0c" />
                        <path d="M11.1885 4.96536H9.65854V6.49536H11.1885V4.96536Z" fill="#0f0e0c" />
                        <path d="M9.65855 24.7754H8.13855V29.3454H9.65855V24.7754Z" fill="#0f0e0c" />
                        <path d="M9.65855 6.49538H8.13855V8.01538H9.65855V6.49538Z" fill="#0f0e0c" />
                        <path d="M8.13855 8.01537H6.61855V9.53537H8.13855V8.01537Z" fill="#0f0e0c" />
                        <path d="M6.61855 9.53537H5.08854V11.0654H6.61855V9.53537Z" fill="#0f0e0c" />
                        <path d="M5.08854 21.7254H3.56854V23.2554H5.08854V21.7254Z" fill="#0f0e0c" />
                        <path d="M5.08854 11.0654H3.56854V12.5854H5.08854V11.0654Z" fill="#0f0e0c" />
                        <path d="M3.56855 0.39537V1.91537H2.04855V3.44537H3.56855V4.96537H5.08855V3.44537H6.61855V1.91537H5.08855V0.39537H3.56855Z" fill="#0f0e0c" />
                        <path d="M3.56855 23.2554H2.04855V24.7754H3.56855V23.2554Z" fill="#0f0e0c" />
                        <path d="M3.56855 20.2054H2.04855V21.7254H3.56855V20.2054Z" fill="#0f0e0c" />
                        <path d="M3.56855 12.5854H2.04855V15.6354H3.56855V12.5854Z" fill="#0f0e0c" />
                        <path d="M2.04855 21.7254H0.518545V23.2554H2.04855V21.7254Z" fill="#0f0e0c" />
                      </svg>


                    </div>
                  </button>
                  <button
                    onClick={() => handleButtonClick("BgRemover")}
                    className={`${styles.menuItem} ${activeTab === "BgRemover" ? styles.active : ""}`}
                  >
                    <div>

                      <svg
                        className={styles.tabIcon} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6585 12.8253V14.3453H25.1385V15.8753H23.6085V18.9253H25.1385V21.9653H22.0885V23.4953H25.1385V25.0153H29.7085V26.5353H31.2285V23.4953H32.7585V18.9253H31.2285V15.8753H29.7085V12.8253H26.6585Z" fill="#0f0e0c" />
                        <path d="M29.7085 26.5352H28.1785V28.0652H29.7085V26.5352Z" fill="#0f0e0c" />
                        <path d="M28.1785 28.0652H26.6585V29.5852H28.1785V28.0652Z" fill="#0f0e0c" />
                        <path d="M26.6585 29.5853H22.0885V31.1153H26.6585V29.5853Z" fill="#0f0e0c" />
                        <path d="M25.1385 5.20524V11.3052H26.6585V2.15524H25.1385V3.68524H23.6085V5.20524H25.1385Z" fill="#0f0e0c" />
                        <path d="M19.0385 11.3052V8.25525H17.5185V11.3052H15.9885V12.8252H25.1385V11.3052H19.0385Z" fill="#0f0e0c" />
                        <path d="M23.6085 2.15524H22.0885V3.68524H23.6085V2.15524Z" fill="#0f0e0c" />
                        <path d="M22.0885 31.1153H20.5585V32.6353H22.0885V31.1153Z" fill="#0f0e0c" />
                        <path d="M22.0885 20.4453H20.5585V21.9653H22.0885V20.4453Z" fill="#0f0e0c" />
                        <path d="M20.5585 29.5853H19.0385V31.1153H20.5585V29.5853Z" fill="#0f0e0c" />
                        <path d="M20.5585 21.9652H19.0385V23.4952H20.5585V21.9652Z" fill="#0f0e0c" />
                        <path d="M19.0385 28.0652H17.5185V29.5852H19.0385V28.0652Z" fill="#0f0e0c" />
                        <path d="M19.0385 23.4952H17.5185V25.0152H19.0385V23.4952Z" fill="#0f0e0c" />
                        <path d="M17.5185 25.0153H15.9885V28.0653H17.5185V25.0153Z" fill="#0f0e0c" />
                        <path d="M17.5185 6.72525H15.9885V8.25525H17.5185V6.72525Z" fill="#0f0e0c" />
                        <path d="M5.32855 11.3053H8.36855V12.8253H11.4185V11.3053H12.9485V9.77525H14.4685V6.72525H15.9885V3.68525H14.4685V2.15525H22.0885V0.635254H8.36855V2.15525H6.84855V3.68525H5.32855V6.72525H3.79855V9.77525H5.32855V11.3053Z" fill="#0f0e0c" />
                        <path d="M8.36855 25.0152H6.84855V26.5352H5.32855V28.0652H3.79855V29.5852H5.32855V31.1152H6.84855V32.6352H14.4685V25.0152H9.89855V21.9652H8.36855V25.0152Z" fill="#0f0e0c" />
                        <path d="M11.4185 20.4452H9.89854V21.9652H11.4185V23.4952H12.9485V15.8752H11.4185V20.4452Z" fill="#0f0e0c" />
                        <path d="M5.32855 15.8752H11.4185V14.3452H2.27855V15.8752H3.79855V17.3952H5.32855V15.8752Z" fill="#0f0e0c" />
                        <path d="M3.79855 25.0153H2.27855V28.0653H3.79855V25.0153Z" fill="#0f0e0c" />
                        <path d="M3.79855 17.3953H2.27855V20.4453H3.79855V17.3953Z" fill="#0f0e0c" />
                        <path d="M2.27854 20.4453H0.758545V25.0153H2.27854V20.4453Z" fill="#0f0e0c" />
                      </svg>


                    </div>
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