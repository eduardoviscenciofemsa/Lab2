import React from 'react';
import {SafeAreaView} from 'react-native';

import CharacterList from '../components/organisms/CharacterList';
import {useRickAndMorty} from '../hooks/useRickNMorty';

import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const {characters} = useRickAndMorty();

  return (
    <SafeAreaView style={styles.container}>
      <CharacterList characters={characters} />
    </SafeAreaView>
  );
};

export default HomeScreen;
