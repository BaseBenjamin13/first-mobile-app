import { StyleSheet, View, Text } from 'react-native';

function GoalItem({ item, goalCompleted }) {
  return (
        <View 
        style={item.item.completed ? styles.goalItemCompleted : styles.goalItem}>
            <Text  
            onPress={() => goalCompleted(item.index)}
            style={item.item.completed ? {textDecorationLine: 'line-through'} : styles.goalText}>
            {item.item.text}</Text>
        </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        alignItems: 'center',
    },
    goalItemCompleted: {
        margin: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        textDecorationLine: 'line-through',
    },
    goalText: {
        color: 'white',
    },
})