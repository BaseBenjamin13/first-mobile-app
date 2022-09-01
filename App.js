import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const image = { uri: "https://i.imgur.com/uVkX2tR_d.webp?maxwidth=128&shape=square" };

export default function App() {


  return (
    <View style={styles.container}>
        <View>
            <Text>Another text</Text>
        </View>
        <Text>Hello World</Text>
            
        <Button title="Tap Me!" />
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
