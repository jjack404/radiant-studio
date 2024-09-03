import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styles from './Vote.module.css';

const cardsData = [
  { id: 1, image: 'assets/ex1.png', title: 'sick drawing', user: 'dicky' },
  { id: 2, image: 'assets/ex2.png', title: 'My Radiant 003', user: 'DEVOUR' },
  { id: 3, image: 'assets/ex3.png', title: 'Radiate me', user: 'KEM0S4BE' },
  { id: 4, image: 'assets/ex4.png', title: 'Card 4', user: 'sp-14' },
  { id: 5, image: 'assets/ex5.png', title: 'Card 5', user: 'ALEX' },
  { id: 6, image: 'assets/ex6.png', title: 'Card 6', user: 'Satoshi' },
];

const to = (i) => ({ x: 0, y: i * -15, scale: 1 - i * 0.03, opacity: 1, zIndex: cardsData.length - i });
const from = (i) => ({ x: 0, y: -1000, scale: .1, opacity: 0, zIndex: i });

const Vote = () => {
  const [gone, setGone] = useState(0);

  const [props, api] = useSprings(cardsData.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.9;
    const dir = xDir < 0 ? -1 : 1;

    if (!active && trigger) {
      setGone(g => g + 1);
    }

    api.start(i => {
      if (index !== i) return;
      const isGone = i < gone + (trigger ? 1 : 0);
      const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
      const scale = active ? 1.1 : 1 - (i - gone) * 0.01;
      return {
        x,
        scale,
        opacity: isGone ? 0 : 1,
        zIndex: cardsData.length - (i - gone),
        config: { friction: 20, tension: active ? 1000 : isGone ? 200 : 500 }
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
            <svg width="40" height="41" viewBox="0 0 40 41" fill="#cccccc" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1615_20787)">
                <path d="M30.4687 29.0625V27.1625H28.5687V25.2625H30.4687V6.2125H26.6562V4.3125H30.4687V2.4H38.0938V29.0625H30.4687ZM34.2812 21.45H32.3812V25.2625H34.2812V21.45Z" fill="#000001" />
                <path d="M28.5687 29.0625H26.6562V27.1625H28.5687V29.0625Z" fill="#000001" />
                <path d="M26.6578 30.9746H24.7578V29.0621H26.6578V30.9746Z" fill="#000001" />
                <path d="M26.6578 4.3125H24.7578V2.4H26.6578V4.3125Z" fill="#000001" />
                <path d="M24.7555 38.5869H22.8555V30.9744H24.7555V38.5869Z" fill="#000001" />
                <path d="M22.8555 40.5H19.043V38.5875H22.8555V40.5Z" fill="#000001" />
                <path d="M24.7566 2.39941H7.61914V0.499413H24.7566V2.39941Z" fill="#000001" />
                <path d="M20.943 27.1621H19.043V25.2621H20.943V27.1621Z" fill="#000001" />
                <path d="M19.0445 38.5869H17.1445V36.6869H19.0445V38.5869Z" fill="#000001" />
                <path d="M19.0445 29.0625H17.1445V27.1625H19.0445V29.0625Z" fill="#000001" />
                <path d="M17.143 36.6875H15.2305V29.0625H17.143V36.6875Z" fill="#000001" />
                <path d="M19.0445 25.2617H5.70703V23.3492H19.0445V25.2617Z" fill="#000001" />
                <path d="M13.3297 6.2123V8.1123H3.80469V4.3123H5.70469V6.2123H13.3297Z" fill="#000001" />
                <path d="M7.61953 4.3125H5.70703V2.4H7.61953V4.3125Z" fill="#000001" />
                <path d="M5.70469 23.3506H3.80469V21.4506H5.70469V23.3506Z" fill="#000001" />
                <path d="M11.4187 11.9242V13.8242H3.80625V17.6367H11.4187V19.5492H3.80625V21.4492H1.90625V8.11172H3.80625V11.9242H11.4187Z" fill="#000001" />
              </g>
              <defs>
                <clipPath id="clip0_1615_20787">
                  <rect width="40" height="40" fill="white" transform="matrix(1 0 0 -1 0 40.5)" />
                </clipPath>
              </defs>
            </svg>
            <span>Bad</span>
          </button>
          <button className={styles.RadButton} onClick={() => handleButtonClick('right')}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1615_20770)">
                <path d="M35.2359 6.21191H33.3359V30.9744H35.2359V6.21191Z" fill="#0f0e0c" />
                <path d="M31.4242 34.7861H12.3867V32.8861H10.4742V34.7861H8.57422V40.4986H35.2367V34.7861H33.3367V30.9736H31.4242V34.7861ZM31.4242 38.5986H27.6242V36.6861H31.4242V38.5986Z" fill="#0f0e0c" />
                <path d="M33.3359 4.31152H29.5234V6.21152H33.3359V4.31152Z" fill="#0f0e0c" />
                <path d="M27.625 23.3613H23.8125V25.2613H27.625V23.3613Z" fill="#0f0e0c" />
                <path d="M19.9996 25.2607H14.2871V27.1607H19.9996V25.2607Z" fill="#0f0e0c" />
                <path d="M16.1871 17.6359H14.2871V19.5484H18.0996V13.8359H21.9121V19.5484H18.0996V21.4484H19.9996V25.2609H21.9121V23.3609H23.8121V13.8359H27.6246V23.3609H29.5246V6.21094H27.6246V11.9234H18.0996V2.39844H16.1871V17.6359Z" fill="#0f0e0c" />
                <path d="M16.1867 0.499023H12.3867V2.39902H16.1867V0.499023Z" fill="#0f0e0c" />
                <path d="M14.2867 23.3613H12.3867V25.2613H14.2867V23.3613Z" fill="#0f0e0c" />
                <path d="M14.2867 17.6359V15.7359H12.3867V2.39844H10.4742V15.7359H8.57422V17.6359H14.2867Z" fill="#0f0e0c" />
                <path d="M10.4742 30.9736H8.57422V32.8861H10.4742V30.9736Z" fill="#0f0e0c" />
                <path d="M8.57578 27.1611H6.67578V30.9736H8.57578V27.1611Z" fill="#0f0e0c" />
                <path d="M8.57578 17.6367H6.67578V19.5492H8.57578V17.6367Z" fill="#0f0e0c" />
                <path d="M6.67422 19.5498H4.76172V27.1623H6.67422V19.5498Z" fill="#0f0e0c" />
              </g>
              <defs>
                <clipPath id="clip0_1615_20770">
                  <rect width="40" height="40" fill="none" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

            <span>Rad</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Vote;