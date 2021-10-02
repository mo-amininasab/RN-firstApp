import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (e) => {
    setEnteredGoal(e.target.value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChange={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 6,
  },
});
