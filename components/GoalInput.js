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
                <View style={styles.buttonContainer}>
                    <View style={styles.addGoalButton}>
                        <Button disabled={enteredGoalText !== '' ? false : true}
                        title="Add Goal" onPress={addGoal} />
                    </View>
                    <View style={styles.cancelGoalButton}>
                        <Button color="red" title="Cancel"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
    buttonContainer: {
        flexDirection: 'row',
    },
    addGoalButton: {
        margin: 12,
    },
    cancelGoalButton: {
        margin: 12,
        color: 'red',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 15,
        borderTopEndRadius: 0,
        borderTopStartRadius: 5,
        // borderBottomEndRadius: 15,
        borderTopColor: 'red',
        borderTopWidth: 2,
    },
});