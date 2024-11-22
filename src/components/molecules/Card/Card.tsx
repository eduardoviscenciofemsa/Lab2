import React, {memo} from 'react';
import {
  Text,
  Animated as RNAnimated,
  View,
  ActivityIndicator,
  ViewToken,
} from 'react-native';
import Animated, {
  LinearTransition,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

import type {Character} from '../../../types/common/UserCharacter.type';

import {useAnimated} from '../../../hooks/useAnimated';

import {styles} from './Card.styles';

type CardProps = Pick<Character, 'id' | 'name' | 'image'> & {
  viewableItems: SharedValue<ViewToken<Character>[]>;
  onSwipe: (id: number) => void;
};

const Card = memo(({id, name, image, viewableItems, onSwipe}: CardProps) => {
  const handleSwipe = () => onSwipe(id);

  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = !!viewableItems.value
      .filter(element => element.isViewable)
      .find(element => element.item.id === id);

    return {
      opacity: withTiming(isVisible ? 1 : 0, {duration: 500}),
    };
  });

  const {pan, panResponder, runningSpring} = useAnimated({
    onFinished: handleSwipe,
  });

  return (
    <Animated.View layout={LinearTransition} style={animatedStyle}>
      <RNAnimated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.cardItem]}>
        <View style={styles.cardContent}>
          <FastImage
            style={styles.image}
            source={{
              uri: image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.itemText}>{name}</Text>
          {runningSpring && (
            <ActivityIndicator
              size="small"
              color="#00ff00"
              style={styles.indicator}
            />
          )}
        </View>
      </RNAnimated.View>
    </Animated.View>
  );
});

export default Card;
