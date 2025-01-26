import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Button, Text as TextRneui } from '@rneui/themed';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export default function RequestList() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <>
      <View style={styles.container}>
        <Text>Request</Text>
        <Card>
          <TextRneui h4>Sophia</TextRneui>
          <TextRneui>Needs help opening ground floor to Mary Gates Hall</TextRneui>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('RequestList')}>
            <Text style={styles.loginText}>LEND A WING</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      backgroundColor: '#f8f9fa', // Light background color for a clean look
      padding: 30,
  },
  title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#333', // Darker text color for readability
      marginBottom: 20, // Spacing between title and radio buttons
      textAlign: 'center', // Center align text
  },
  input: {
      width: '100%', // Full width for better usability
      height: 50,
      borderColor: '#ccc', // Light border color
      borderWidth: 1,
      borderRadius: 8, // Rounded corners for modern design
      paddingHorizontal: 15, // Spacing inside the input
      backgroundColor: '#fff', // White background for contrast
      fontSize: 18,
      color: '#333', // Text color
  },
  loginBtn: {
    width: "50%",
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
});