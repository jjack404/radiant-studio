
import React from "react";
import styles from "./TopMenu.module.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import StartButton from "./StartButton/StartButton";

const MainComponent = () => (
  <main className={styles.mainContainer}>
    <div className={styles.topMenu}>

      <div className={styles.topBar}>
        <NavigationBar />
        <StartButton />
      </div>
      
      </div>

      <div className={styles.topLogoContainer}>
        <div className={styles.topLogo}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.84628 24.6152V39.3847H4.92314V34.4615H0V29.5384H4.92314V24.6152H9.84628Z" fill="#0F0E0C"/>
<path d="M14.7698 49.2317V44.3086H9.84668V49.2317V54.1549H14.7698H19.693V49.2317H14.7698Z" fill="#0F0E0C"/>
<path d="M19.693 14.7698V9.84668H14.7698H9.84668V14.7698V19.693H14.7698V14.7698H19.693Z" fill="#0F0E0C"/>
<path d="M29.5394 4.92314H24.6162V9.84628H29.5394H34.4625H39.3856V4.92314H34.4625V0H29.5394V4.92314Z" fill="#0F0E0C"/>
<path d="M39.3856 54.1543H34.4625H29.5394H24.6162V59.0774H29.5394V64.0006H34.4625V59.0774H39.3856V54.1543Z" fill="#0F0E0C"/>
<path d="M39.3852 19.6927V14.7695H34.4621H29.539H24.6158V19.6927H19.6927V24.6158H14.7695V29.539V34.4621V39.3852H19.6927V44.3084H24.6158V49.2315H29.539H34.4621H39.3852V44.3084H44.3084V39.3852H49.2315V34.4621V29.539V24.6158H44.3084V19.6927H39.3852Z" fill="#0F0E0C"/>
<path d="M44.3086 49.2317V54.1549H49.2317H54.1549V49.2317V44.3086H49.2317V49.2317H44.3086Z" fill="#0F0E0C"/>
<path d="M49.2317 14.7698V19.693H54.1549V14.7698V9.84668H49.2317H44.3086V14.7698H49.2317Z" fill="#0F0E0C"/>
<path d="M54.1533 34.4615V39.3847H59.0765V34.4615H63.9996V29.5384H59.0765V24.6152H54.1533V29.5384V34.4615Z" fill="#0F0E0C"/>
</svg>

        </div>
      </div>
  </main>
);

export default MainComponent;
