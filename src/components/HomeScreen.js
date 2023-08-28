import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Media"
                onPress={() => navigation.navigate('Media')}
            />
            <Button
                title="Lista"
                onPress={() => navigation.navigate('Lista')}
            />
            <Button
                title="Contador"
                onPress={() => navigation.navigate('CounterScreen')}
            />
            <Button
                title="Lista de cor"
                onPress={() => navigation.navigate('ColorList')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
        height: 20,
        width: 40
    },
});
