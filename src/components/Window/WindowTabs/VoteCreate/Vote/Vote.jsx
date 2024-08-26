import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styles from './Vote.module.css';

const cardsData = [
  { id: 1, image: 'assets/ex1.png', title: 'Card 1', user: 'dicky' },
  { id: 2, image: 'assets/ex2.png', title: 'Card 2', user: 'DEVOUR' },
  { id: 3, image: 'assets/ex3.png', title: 'Card 3', user: 'KEM0S4BE' },
  { id: 4, image: 'assets/ex4.png', title: 'Card 4', user: 'sp-14' },
  { id: 5, image: 'assets/ex5.png', title: 'Card 5', user: 'ALEX' },
  { id: 6, image: 'assets/ex6.png', title: 'Card 6', user: 'Satoshi' },
];

const to = (i) => {
  const xOffset = i === 0 ? 0 : i === 1 ? -6 : -12;
  return { x: xOffset, y: i * 4, scale: 1, delay: i * 0 };
};

const from = () => ({ x: 0, y: 1000, scale: 1 });

const Vote = () => {
  const [gone, setGone] = useState(new Set());
  const [props, api] = useSprings(cardsData.length, (i) => ({
    ...to(i),
    from: from(),
  }));
  const [allGone, setAllGone] = useState(false);

  useEffect(() => {
    setGone(new Set());
    setAllGone(false);
    api.start((i) => to(i));
  }, [api]);

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2; // If velocity is above threshold
    const dir = xDir < 0 ? -1 : 1; // Swipe direction
    const threshold = window.innerWidth * 0.25; // 25% of the screen width

    if (!down && (trigger || Math.abs(mx) > threshold)) gone.add(index); // Mark card as gone if swipe is beyond threshold

    api.start((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : to(i).x;
      const scale = down ? 1.1 : 1;
      return {
        x,
        scale,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cardsData.length) {
      setAllGone(true);
    }
  }, { filterTaps: true, preventScroll: true });

  const handleClick = (e, index) => {
    const dir = e.clientX > window.innerWidth / 2 ? 1 : -1;
    gone.add(index);

    api.start((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : to(i).x;
      return {
        x,
        scale: 1,
        config: { friction: 50, tension: 200 },
      };
    });

    if (gone.size === cardsData.length) {
      setAllGone(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.voteWrapper}>
        {allGone ? (
          <div className={styles.endMessage}>You've reached the end of the stack</div>
        ) : (
          props.map(({ x, scale }, i) => (
            <animated.div
              key={i}
              className={styles.card}
              style={{
                transform: x.to((x) => `translateX(${x}px)`),
                scale,
                touchAction: 'none',
              }}
              {...bind(i)}
              onClick={(e) => handleClick(e, i)}
            >
              <div className={styles.cardImageContainer}>
                <img src={cardsData[i].image} alt={cardsData[i].text} className={styles.cardImage} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{cardsData[i].title}</div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardUserWrap}>By<div className={styles.cardUser}>{cardsData[i].user}</div>
                  <div className={styles.cardStats}></div>
                  </div>
                </div>
              </div>
            </animated.div>
          ))
        )}
      </div>
      <div className={styles.VoteButtons}>
        <button className={styles.BadButton}>
          <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4697 29.0625V27.1625H27.5697V25.2625H29.4697V6.2125H25.6572V4.3125H29.4697V2.4H37.0947V29.0625H29.4697ZM33.2822 21.45H31.3822V25.2625H33.2822V21.45Z" fill="#000001" />
            <path d="M27.5697 29.0625H25.6572V27.1625H27.5697V29.0625Z" fill="#000001" />
            <path d="M25.6578 30.9746H23.7578V29.0621H25.6578V30.9746Z" fill="#000001" />
            <path d="M25.6578 4.3125H23.7578V2.4H25.6578V4.3125Z" fill="#000001" />
            <path d="M23.7574 38.5869H21.8574V30.9744H23.7574V38.5869Z" fill="#000001" />
            <path d="M21.8574 40.5H18.0449V38.5875H21.8574V40.5Z" fill="#000001" />
            <path d="M23.7576 2.39941H6.62012V0.499413H23.7576V2.39941Z" fill="#000001" />
            <path d="M19.9449 27.1621H18.0449V25.2621H19.9449V27.1621Z" fill="#000001" />
            <path d="M18.0455 38.5869H16.1455V36.6869H18.0455V38.5869Z" fill="#000001" />
            <path d="M18.0455 29.0625H16.1455V27.1625H18.0455V29.0625Z" fill="#000001" />
            <path d="M16.1449 36.6875H14.2324V29.0625H16.1449V36.6875Z" fill="#000001" />
            <path d="M18.0445 25.2617H4.70703V23.3492H18.0445V25.2617Z" fill="#000001" />
            <path d="M12.3316 6.2123V8.1123H2.80664V4.3123H4.70664V6.2123H12.3316Z" fill="#000001" />
            <path d="M6.61953 4.3125H4.70703V2.4H6.61953V4.3125Z" fill="#000001" />
            <path d="M4.70664 23.3506H2.80664V21.4506H4.70664V23.3506Z" fill="#000001" />
            <path d="M10.4197 11.9242V13.8242H2.80723V17.6367H10.4197V19.5492H2.80723V21.4492H0.907227V8.11172H2.80723V11.9242H10.4197Z" fill="#000001" />
          </svg>
          <span>Bad</span>
        </button>
        <button className={styles.RadButton}>
          <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.2369 6.21191H29.3369V30.9744H31.2369V6.21191Z" fill="#000001" />
            <path d="M27.4242 34.7861H8.38672V32.8861H6.47422V34.7861H4.57422V40.4986H31.2367V34.7861H29.3367V30.9736H27.4242V34.7861ZM27.4242 38.5986H23.6242V36.6861H27.4242V38.5986Z" fill="#000001" />
            <path d="M29.3359 4.31152H25.5234V6.21152H29.3359V4.31152Z" fill="#000001" />
            <path d="M23.625 23.3613H19.8125V25.2613H23.625V23.3613Z" fill="#000001" />
            <path d="M15.9996 25.2607H10.2871V27.1607H15.9996V25.2607Z" fill="#000001" />
            <path d="M12.1871 17.6359H10.2871V19.5484H14.0996V13.8359H17.9121V19.5484H14.0996V21.4484H15.9996V25.2609H17.9121V23.3609H19.8121V13.8359H23.6246V23.3609H25.5246V6.21094H23.6246V11.9234H14.0996V2.39844H12.1871V17.6359Z" fill="#000001" />
            <path d="M12.1867 0.499023H8.38672V2.39902H12.1867V0.499023Z" fill="#000001" />
            <path d="M10.2867 23.3613H8.38672V25.2613H10.2867V23.3613Z" fill="#000001" />
            <path d="M10.2867 17.6359V15.7359H8.38672V2.39844H6.47422V15.7359H4.57422V17.6359H10.2867Z" fill="#000001" />
            <path d="M6.47422 30.9736H4.57422V32.8861H6.47422V30.9736Z" fill="#000001" />
            <path d="M4.5748 27.1611H2.6748V30.9736H4.5748V27.1611Z" fill="#000001" />
            <path d="M4.5748 17.6367H2.6748V19.5492H4.5748V17.6367Z" fill="#000001" />
            <path d="M2.67422 19.5498H0.761719V27.1623H2.67422V19.5498Z" fill="#000001" />
          </svg>
          <span>Rad</span></button>
      </div>
    </div>
  );
};

export default Vote;
