import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
    
    const [modalIsVisible, setModalIsVisible] = useState(false);
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
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
        <View style={styles.showModalButton}>
            <Button title="Add A Goal" color="#5e0acc" 
            onPress={() => setModalIsVisible(!modalIsVisible)}/>
        </View>
        <GoalInput addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible}/>

        <View style={styles.goalsContainer}>
            {goals.length <= 0?
                <Text style={styles.listText}>...List of goals</Text> 
                :
                <FlatList data={goals} renderItem={(item) => {
                    return <GoalItem item={item} deleteHandler={deleteHandler} />
                }}/>  
            }
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        // backgroundColor: 'black',
        
    },
    showModalButton: {
        margin: 25,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    goalsContainer: {
        flex: 4,
    },
    listText: {
        margin: 20,
        color: 'white',
        alignSelf: 'center',
    }
});
