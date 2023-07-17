import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addColorAsync, loadColorsAsync,
  removeColorAsync,
  selectColors,
} from './colorsSlice';
import styles from './Colors.module.css';
import { useSpring, animated } from '@react-spring/web';

export function Colors() {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadColorsAsync());
  }, [dispatch]);

  const [addSprings, addSpringsApi] = useSpring(() => ({
    from: { left: 0 },
  }));

  const [removingColor, setRemovingColor] = useState(null);
  const [removeSprings, removeSpringsApi] = useSpring(() => ({
    from: { left: '0' },
  }));

  const prevColorsRef = useRef();
  useEffect(() => {
    if ((!prevColorsRef.current && colors.length > 0) || prevColorsRef.current?.length < colors.length) {
      console.log('add...');
      addSpringsApi.start({
        from: {
          left: '-20%',
        },
        to: {
          left: '0',
        },
      });
    }
    if (prevColorsRef.current && prevColorsRef.current?.length > colors.length) {
      setRemovingColor(prevColorsRef.current[prevColorsRef.current?.length - 1]);
      removeSpringsApi.start({
        from: {
          left: '0',
        },
        to: {
          left: '100%',
        },
        onRest: () => {
          console.log('done!');
          setRemovingColor(null);
        },
      });
    }
    prevColorsRef.current = colors;
  }, [colors]);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add color"
          onClick={() => dispatch(addColorAsync())}
        >
          Add
        </button>
        <button
          className={styles.button}
          aria-label="Remove color"
          onClick={() => colors.length && dispatch(removeColorAsync(colors[colors.length - 1].id))}
        >
          Remove
        </button>
      </div>
      <animated.div
        className={styles.colors}
        style={{
          ...addSprings,
        }}
      >
        {colors.map(color => <span
          key={color.id}
          className={styles.value}
          style={{
            'background-color': color.color,
          }}
        >
          {color.color}
        </span>)}
        {removingColor && <animated.span
          className={styles.removing}
          style={{
            'background-color': removingColor.color,
            ...removeSprings,
          }}
        >
          {removingColor.color}
        </animated.span>}
      </animated.div>
    </div>
  );
}
