import {useRef, useState} from 'react';
import {Animated, PanResponder} from 'react-native';

export const useAnimated = () => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const [runningSpring, setRunningSpring] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        console.log('gesture:', gesture);
        return true;
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (runningSpring) {
          return;
        }

        if (gestureState.dx > 120 || gestureState.dx < -120) {
          setRunningSpring(true);
        }

        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start(({finished}) => {
          if (finished) {
            setRunningSpring(false);
          }
        });
      },
    }),
  ).current;

  return {
    pan,
    panResponder,
    runningSpring,
  };
};
