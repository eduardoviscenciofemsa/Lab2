import React from 'react';
import {FlatList, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

import type {Character} from '../../types/common/UserCharacter.type';

import Card from '../molecules/Card';

import {styles} from './CharacterList.styles';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = ({characters}: CharacterListProps) => {
  const renderItem = ({item}: {item: Character}) => (
    <Animated.View entering={FadeIn.duration(3000)}>
      <Card name={item.name} image={item.image} />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CharacterList;
