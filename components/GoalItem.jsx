import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)} activeOpacity={0.8}>
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  );
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
