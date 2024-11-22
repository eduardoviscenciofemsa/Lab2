import React, {useCallback, useState} from 'react';
import {FlatList, View, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import type {Character} from '../../../types/common/UserCharacter.type';

import {EmptyState} from '../EmptyState';

import {ListHeader} from '../../atoms';
import {Card} from '../../molecules';

import {styles} from './CharacterList.styles';

type CharacterListProps = {
  characters: Character[];
  refetch: () => void;
};

const CharacterList = ({characters, refetch}: CharacterListProps) => {
  const viewableListItems = useSharedValue<ViewToken<Character>[]>([]);

  const [elements, setElements] = useState<Character[]>(characters);

  const filterCharacter = useCallback(
    (id: number) =>
      setElements(prevElements => prevElements.filter(item => item.id !== id)),
    [],
  );

  const renderItem = ({item}: {item: Character}) => (
    <Card
      id={item.id}
      name={item.name}
      image={item.image}
      onSwipe={filterCharacter}
      viewableItems={viewableListItems}
    />
  );

  const handleOnViewableItems = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<Character>[];
  }) => {
    viewableListItems.value = viewableItems;
  };

  const handleKeyExtractor = (item: Character) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={elements}
        renderItem={renderItem}
        onViewableItemsChanged={handleOnViewableItems}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={handleKeyExtractor}
        ListHeaderComponent={<ListHeader />}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={<EmptyState refetch={refetch} />}
      />
    </View>
  );
};

export default CharacterList;
