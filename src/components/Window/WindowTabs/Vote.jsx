import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styles from './Vote.module.css';

const cardsData = [
  { id: 1, image: 'assets/ex1.png', text: 'Card 1' },
  { id: 2, image: 'assets/ex2.png', text: 'Card 2' },
  { id: 3, image: 'assets/ex3.png', text: 'Card 3' },
  { id: 4, image: 'assets/ex4.png', text: 'Card 4' },
  { id: 5, image: 'assets/ex5.png', text: 'Card 5' },
  { id: 6, image: 'assets/ex6.png', text: 'Card 6' },
];

const to = (i) => {
  const xOffset = i === 0 ? 0 : i === 1 ? -6 : -12;
  return { x: xOffset, y: i * 4, scale: 1, delay: i * 100 };
};

const from = () => ({ x: 0, y: 1000, scale: 1.5 });

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
              <div className={styles.cardText}>{cardsData[i].text}</div>
            </animated.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Vote;
