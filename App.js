import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (!goalTitle) {
      return;
    }

    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);

    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.key !== goalKey)
    );
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
