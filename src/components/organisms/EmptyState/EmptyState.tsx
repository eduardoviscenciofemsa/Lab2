import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './EmptyState.styles';

type PropsT = {
  refetch: () => void;
};

const EmptyState = ({refetch}: PropsT) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.spanText]}>Oops</Text>
      <Text style={styles.text}>All characters have been deleted</Text>
      <TouchableOpacity onPress={refetch} style={styles.button}>
        <Text style={styles.buttonText}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyState;
