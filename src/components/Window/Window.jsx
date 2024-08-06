import React, { useState } from "react";
import styles from "./Window.module.css";
import Home from "./WindowTabs/Home";
import Vote from "./WindowTabs/Vote";
import Create from "./WindowTabs/Create/Create";
import MyStudio from "./WindowTabs/MyStudio";
import Help from "./WindowTabs/Help";

const RadiantsStudio = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Vote":
        return <Vote />;
{/*      case "Create":
        return <Create />; */}
      case "My Studio":
        return <MyStudio />;
      case "Help":
        return <Help />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button>
          <div className={styles.iconContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff654d248826a31a3f2aa16bd9cf1307bea0d5420f7e82ccb426360697760d03?apiKey=05ecaddee9444e0b87f4e90bae6c22dc"
              className={styles.icon}
              alt="Icon"
            />
          </div>
        </button>
        <button className={styles.dateBtn}>
          <div className={styles.dateContainer}>
            <div className={styles.date}>1/10/24</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7864dbe65be4fc5944278cdda6f5e89b3fc061bcaa5c22f99d17a139998db543?apiKey=05ecaddee9444e0b87f4e90bae6c22dc"
              className={styles.dateIcon}
              alt="Date icon"
            />
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
        <button>
          <div className={styles.userContainer}>
            <div className={styles.userId}>Connect</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8592287267d33d1d7fee9e1d0446432b8e590eb79d1b9a4d17c4c155d80761a3?apiKey=05ecaddee9444e0b87f4e90bae6c22dc"
              className={styles.userIcon}
              alt="User icon"
            />
          </div>
        </button>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            <div className={styles.sidebar}>
              <div className={styles.menu}>
                <div className={styles.sidebarTop}>
                <button
                  onClick={() => handleButtonClick("Home")}
                  className={`${styles.menuItem} ${activeTab === "Home" ? styles.active : ""}`}
                >
                  <div>Home</div>
                </button>
                <button
                  onClick={() => handleButtonClick("Vote")}
                  className={`${styles.menuItem} ${activeTab === "Vote" ? styles.active : ""}`}
                >
                  <div>Vote</div>
                </button>
                <button
                  onClick={() => handleButtonClick("Create")}
                  className={`${styles.menuItem} ${activeTab === "Create" ? styles.active : ""}`}
                >
                  <div>Create</div>
                </button>
                </div>
                <div className={styles.menuBottomLg}>
                  <button
                    onClick={() => handleButtonClick("My Studio")}
                    className={`${styles.menuItem} ${activeTab === "My Studio" ? styles.active : ""}`}
                  >
                    <div>My Studio</div>
                  </button>
                  <button
                    onClick={() => handleButtonClick("Help")}
                    className={`${styles.menuItem} ${activeTab === "Help" ? styles.active : ""}`}
                  >
                    <div>Help</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.contentArea}>
              {renderContent()}
            </div>
            <div className={styles.menuBottom}>
              <button
                onClick={() => handleButtonClick("My Studio")}
                className={`${styles.menuItem} ${activeTab === "My Studio" ? styles.active : ""}`}
              >
                <div>My Studio</div>
              </button>
              <button
                onClick={() => handleButtonClick("Help")}
                className={`${styles.menuItem} ${activeTab === "Help" ? styles.active : ""}`}
              >
                <div>Help</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RadiantsStudio;