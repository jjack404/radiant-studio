import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
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

const to = (i) => ({ x: 0, y: i * -15, scale: 1 - i * 0.05, opacity: 1, zIndex: cardsData.length - i });
const from = (i) => ({ x: 0, y: -1000, scale: 1, opacity: 0, zIndex: i });

const Vote = () => {
  const [gone, setGone] = useState(0);

  const [props, api] = useSprings(cardsData.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.1;
    const dir = xDir < 0 ? -1 : 1;

    if (!active && trigger) {
      setGone(g => g + 1);
    }

    api.start(i => {
      if (index !== i) return;
      const isGone = i < gone + (trigger ? 1 : 0);
      const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
      const scale = active ? 1.1 : 1 - (i - gone) * 0.05;
      return {
        x,
        scale,
        opacity: isGone ? 0 : 1,
        zIndex: cardsData.length - (i - gone),
        config: { friction: 20, tension: active ? 800 : isGone ? 200 : 500 }
      };
    });

    if (!active && gone >= cardsData.length) {
      setTimeout(() => {
        setGone(0);
        api.start(i => to(i));
      }, 600);
    }
  });

  const handleButtonClick = (direction) => {
    const dir = direction === 'left' ? -1 : 1;
    
    if (gone < cardsData.length) {
      setGone(g => g + 1);

      api.start(i => {
        if (i !== gone) return;
        return {
          x: (200 + window.innerWidth) * dir,
          scale: 1,
          opacity: 0,
          zIndex: 0,
          config: { friction: 20, tension: 500 }
        };
      });

      // Move the remaining cards up
      api.start(i => {
        if (i <= gone) return;
        return to(i - gone - 1);
      });

      if (gone + 1 >= cardsData.length) {
        setTimeout(() => {
          setGone(0);
          api.start(i => to(i));
        }, 600);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.voteWrapper}>
        <div className={styles.cardsWrapper}>
          {props.map(({ x, y, scale, opacity, zIndex }, i) => (
            <animated.div
              key={i}
              {...(i === gone ? bind(i) : {})}
              style={{
                transform: interpolate([x, y, scale], (x, y, s) => `translate3d(${x}px,${y}px,0) scale(${s})`),
                opacity,
                zIndex,
                touchAction: 'none',
              }}
              className={styles.card}
            >
              <div className={styles.cardImageContainer}>
                <img src={cardsData[i].image} alt={cardsData[i].title} className={styles.cardImage} />
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{cardsData[i].title}</div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardUserWrap}>
                    By<div className={styles.cardUser}>{cardsData[i].user}</div>
                  </div>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
        <div className={styles.VoteButtons}>
          <button className={styles.BadButton} onClick={() => handleButtonClick('left')}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG path data */}
            </svg>
            <span>Bad</span>
          </button>
          <button className={styles.RadButton} onClick={() => handleButtonClick('right')}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG path data */}
            </svg>
            <span>Rad</span>
          </button>
        </div>
        <div className={styles.voteContent}>
          <span>Vote on your favorite Radiants!</span>
        </div>
      </div>
    </div>
  );
};

export default Vote;