import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
    FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

const image = { uri: "https://i.imgur.com/uVkX2tR_d.webp?maxwidth=128&shape=square" };

export default function App() {

    // const [text, onChangeText] = React.useState("my course goals");
    const [enteredGoalText, setEnteredGoalText] = useState({text: "", completed: false});
    const [goals, setGoals] = useState([]);
    // const [complete, setComplete] = useState(false);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        setGoals(currentGoals => [
            ...currentGoals,
            {text: enteredGoalText, completed: false, key: Math.random().toString()}
        ])
    }
    const goalCompleted = (index) => {
        let goalsCopy = [...goals];
        goalsCopy[index].completed = true;
        setGoals(goalsCopy);
    }

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            // value={text}
            onChangeText={goalInputHandler}
            // onChangeText={onChangeText}
            // keyboardType="numeric" to change input to a number
            ></TextInput>
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
            {goals.length <= 0?
                <Text>...List of goals</Text> 
                :
                <FlatList data={goals} renderItem={(item) => {
                    return <GoalItem item={item} goalCompleted={goalCompleted}/>
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
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    },
    textInput: {
        height: 40,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 5,
        width: '70%'
    },
    goalsContainer: {
        flex: 4,
    },
    
});
