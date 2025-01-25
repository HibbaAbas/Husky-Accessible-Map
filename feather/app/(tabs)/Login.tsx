
import {useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';




export function Login(props: any) {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const [enter, setEnter] = useState(true);

    const loginCheck = () => {
        if (state.email == "student" && state.password == "password") {
            console.log("Entered");
            setEnter(true);
        }
        else {
            console.log("Failed");
            setEnter(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <GestureHandlerRootView style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Birds of a feather flock together</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username"
                            placeholderTextColor="#545454"
                            onChangeText={(text) =>
                                setState((prevState) => ({ ...prevState, email: text }))
                            }
                        />
                    </View>

                    <View style={styles.passView}>
                        <TextInput
                            style={styles.passText}
                            placeholder="Password"
                            placeholderTextColor="#545454"
                            onChangeText={(text) =>
                                setState((prevState) => ({ ...prevState, password: text }))
                            }
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={loginCheck}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={styles.errorText}>
                        {enter ? "" : "Invalid Username or Password"}
                    </Text>
                </View>
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