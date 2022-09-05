import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';



function GoalInput({ addGoalHandler, modalIsVisible, setModalIsVisible }) {

    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoal() {
        addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
        setModalIsVisible(!modalIsVisible)
    }

    return (
        <Modal visible={modalIsVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                placeholder='add goal here'
                placeholderTextColor='lightgray'
                ></TextInput>
                <Button disabled={enteredGoalText !== '' ? false : true}
                title="Add Goal" onPress={addGoal} />
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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
});