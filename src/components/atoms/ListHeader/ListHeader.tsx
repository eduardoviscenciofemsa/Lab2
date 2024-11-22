import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './ListHeader.styles';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Swipe to <Text style={styles.spanText}>delete</Text>
      </Text>
    </View>
  );
};

export default ListHeader;
