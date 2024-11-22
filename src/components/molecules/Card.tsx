import React from 'react';
import {Text, Animated, View, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

import type {Character} from '../../types/common/UserCharacter.type';

import {useAnimated} from '../../hooks/useAnimated';

import {styles} from './Card.styles';

type CardProps = Pick<Character, 'name' | 'image'>;

const Card = ({name, image}: CardProps) => {
  const {pan, panResponder, runningSpring} = useAnimated();

  return (
    <Animated.View
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
            color="#fff"
            style={styles.indicator}
          />
        )}
      </View>
    </Animated.View>
  );
};

export default Card;
