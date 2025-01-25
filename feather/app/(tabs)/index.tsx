import { Image, StyleSheet, Platform } from 'react-native';
import Login from './Login';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { ReadableStream } from 'web-streams-polyfill';
globalThis.ReadableStream = ReadableStream;

const Stack = createNativeStackNavigator();


export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
