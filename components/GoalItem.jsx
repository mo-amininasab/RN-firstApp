import React from 'react';
import { StyleSheet, Text } from 'react-native';

const GoalItem = ({title}) => {
  return <Text style={styles.listItem}>{title}</Text>;
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 6,
  },
});
