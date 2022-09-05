import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ item, deleteHandler }) {
  return (
      <Pressable 
      onPress={deleteHandler.bind(this, item.item.id)}
      style={({pressed}) => pressed && styles.pressedItem}>
    <View 
    style={item.item.completed ? styles.goalItemCompleted : styles.goalItem}>
            <Text  
            style={item.item.completed ? {textDecorationLine: 'line-through'} : styles.goalText}>
            {item.item.text}</Text>
    </View>
        </Pressable>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        alignItems: 'center',
    },
    pressedItem: {
        backgroundColor: 'red',
        borderRadius: 10,
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
})