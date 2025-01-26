import React, { useMemo, useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function AssistanceForm() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: 'Opening a door', // acts as primary key, should be unique and non-empty string
            label: 'Opening a door',
            value: 'Opening a door'
        },
        {
            id: 'Navigating within a building',
            label: 'Navigating within a building',
            value: 'Navigating within a building'
        },
        {
          id: 'Navigating from one building to another',
          label: 'Navigating from one building to another',
          value: 'Navigating from one building to another'
        },
        {
          id: 'Other',
          label: 'Other',
          value: 'Other'
        },
    ]), []);

    const [selectedValue, setSelectedValue] = useState<string | undefined>('');
    const [otherText, setOtherText] = useState<string>('');


    return (
      <View style={styles.container}>
      <Text style={styles.title}>How can you be assisted?</Text>
      <View style={styles.radioGroupContainer}>
          <RadioGroup
              radioButtons={radioButtons}
              onPress={(value) => setSelectedValue(value)}
              selectedId={selectedValue}
              containerStyle={styles.radioGroup} // Add container styling
          />
      </View>
      {selectedValue === 'Other' && ( // Show TextInput only if "Other" is selected
          <TextInput
              style={styles.input}
              onChangeText={setOtherText}
              value={otherText}
              placeholder="Please specify"
          />
      )}
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('RequestList')}>
          <Text style={styles.loginText}>CONTINUE</Text>
      </TouchableOpacity>
      </View>
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
  radioGroupContainer: {
    width: '100%',
    alignItems: 'flex-start', // Align radio buttons to the left
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 100,
  },
  radioGroup: {
      alignItems: 'flex-start', // Ensure buttons and labels align to the left
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
});