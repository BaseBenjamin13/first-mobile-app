import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';



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
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                placeholder='add goal here'
                placeholderTextColor='gray'
                ></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelGoalButton}>
                        <Button color="red" title="Cancel"
                        onPress={() => setModalIsVisible(!modalIsVisible)}/>
                    </View>
                    <View style={styles.addGoalButton}>
                        <Button disabled={enteredGoalText !== '' ? false : true}
                        title="Add Goal" onPress={addGoal} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '65%',
        height: '30%',
        margin: 20,
        marginTop: '25%',
    },
    textInput: {
        height: 40,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 10,
        backgroundColor: '#e4d0ff',
        paddingLeft: 10,
        width: '70%',
        color: '#120438',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    addGoalButton: {
        margin: 12,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 15,
        borderTopEndRadius: 0,
        borderTopStartRadius: 5,
        borderTopColor: '#b180f0',
        borderTopWidth: 2,
    },
    cancelGoalButton: {
        margin: 12,
        color: 'red',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 15,
        borderTopEndRadius: 0,
        borderTopStartRadius: 5,
        borderTopColor: 'red',
        borderTopWidth: 2,
    },
});