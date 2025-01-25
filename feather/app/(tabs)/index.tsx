import { Image, StyleSheet, Platform } from 'react-native';
import { Login } from './Login';
import {NavigationContainer} from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
