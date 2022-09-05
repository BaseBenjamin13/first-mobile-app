import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
    
    const [goals, setGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setGoals(currentGoals => [
            ...currentGoals,
            {text: enteredGoalText, completed: false, id: Math.random().toString()}
        ])
    }
    // const goalCompleted = (index) => {
    //     let goalsCopy = [...goals];
    //     goalsCopy[index].completed = true;
    //     setGoals(goalsCopy);
    // }

    function deleteHandler(id) {
        setTimeout(function(){ 
            setGoals(currentGoals => {
                return currentGoals.filter((goal) => goal.id !== id)
            });
        }, 200);
    }

  return (
    <View style={styles.appContainer}>

        <GoalInput addGoalHandler={addGoalHandler} />

        <View style={styles.goalsContainer}>
            {goals.length <= 0?
                <Text>...List of goals</Text> 
                :
                <FlatList data={goals} renderItem={(item) => {
                    return <GoalItem item={item} deleteHandler={deleteHandler} />
                }}/>  
            }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 4,
    }, 
});
