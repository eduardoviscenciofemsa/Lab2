import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

import {CharacterList} from '../components/organisms';

import {useRickAndMorty} from '../hooks';

import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const {loading, characters, fetchData} = useRickAndMorty();

  return (
    <SafeAreaView style={styles.container}>
      {!loading && characters.length ? (
        <CharacterList characters={characters} refetch={fetchData} />
      ) : (
        <ActivityIndicator size="small" color="#00ff00" />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
