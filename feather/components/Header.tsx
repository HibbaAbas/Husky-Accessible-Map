import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Header() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const data = [
        { id: 1, name: "Husky Union Building" },
        { id: 2, name: "HUB" },
    ];

      // Explicitly define the type of suggestions to match the data
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<{ id: string; title: string }[]>([]);

  const handleSearch = (text: string) => {
    setSearchText(text);

   // Transform the filtered data to match the required structure
   const filteredData = data
   .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
   .map((item) => ({
     id: item.id.toString(), // Convert id to string
     title: item.name, // Map 'name' to 'title'
   }));

 setSuggestions(filteredData);
 console.log(suggestions);

};

    return (
        <View style={styles.header}>
            <TextInput style={styles.searchbar} placeholder="Search here" placeholderTextColor="grey" onChangeText={handleSearch} />

            <Button title="I need help" color="orange" onPress={() => navigation.navigate('AssistanceForm')} />
            <Button title="Requests near me" color="orange" onPress={() => navigation.navigate('RequestList')} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F1E9",
        height: 190,
        padding: 10,
    },
    searchbar: {
        backgroundColor: "white",
        borderColor: "#E5AA7F",
        color: "grey",
        marginTop: 30,
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        width: "90%",
    },
    suggestionItem: {
        padding: 10,
        fontSize: 16,
        color: "black",
        zIndex: 100,
    },
    button: {
        
    }
});



