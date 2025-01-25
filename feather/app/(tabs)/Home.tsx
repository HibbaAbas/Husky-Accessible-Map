import {useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export function Home(props: any) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <GestureHandlerRootView style={styles.root}>
                <Text>Hello</Text>
            </GestureHandlerRootView>
        </TouchableWithoutFeedback>
    );
}


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#F6F1E9",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F1E9",
    },
    title: {
        fontSize: 50,
        marginBottom: 15,
        color: "black",
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 40,
        color: "black",
    },
    inputView: {
        backgroundColor: "#E8E8E8",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    inputText: {
        height: 50,
        color: "black",
    },
    passView: {
        backgroundColor: "#E8E8E8",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    passText: {
        height: 50,
        color: "black",
    },
    loginBtn: {
        width: "30%",
        backgroundColor: "#E8E8E8",
        borderRadius: 30,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    loginText: {
        color: "black",
    },
    errorText: {
        color: "red",
    },


});