import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export default function Header() {
    const data = [
        { id: 1, name: "Husky Union Building" },
        { id: 2, name: "HUB" },
        { id: 3, name: "Mary Gates Hall" },
        { id: 4, name: "Suzallo Library" },
        { id: 5, name: "Odegaard Undergraduate Library" },
        { id: 6, name: "Denny Hall" },
        { id: 7, name: "Meany Hall" },
        { id: 8, name: "Thomson Hall" },
        { id: 9, name: "Savery Hall" },
        { id: 10, name: "Kane Hall" },
        { id: 11, name: "Guthrie Annex" },
        { id: 12, name: "Paccar Hall" },
        { id: 13, name: "William H. Gates Hall" },
        { id: 14, name: "Physics-Astronomy Building" },
        { id: 15, name: "Bagley Hall" },
        { id: 16, name: "Johnson Hall" },
        { id: 17, name: "Miller Hall" },
        { id: 18, name: "CSE2 (Bill & Melinda Gates Center for Computer Science)" },
        { id: 19, name: "Loew Hall" },
        { id: 20, name: "Molecular Engineering & Sciences Building" },
        { id: 21, name: "Allen Library" },
        { id: 22, name: "Hitchcock Hall" },
        { id: 23, name: "Health Sciences Building" },
        { id: 24, name: "South Campus Center" },
        { id: 25, name: "IMA (Intramural Activities Building)" },
        { id: 26, name: "Husky Stadium" },
        { id: 27, name: "Hall Health Center" },
        { id: 28, name: "Foster Business School" },
        { id: 29, name: "Padelford Hall" },
        { id: 30, name: "Engineering Library (ELB)" },
        { id: 31, name: "Architecture Hall" },
        { id: 32, name: "Art Building" },
        { id: 33, name: "Music Building" },
        { id: 34, name: "Roberts Hall" },
        { id: 35, name: "Smith Hall" },
        { id: 36, name: "McCarty Hall" },
        { id: 37, name: "McMahon Hall" },
        { id: 38, name: "Hansee Hall" },
        { id: 39, name: "Terry Hall" },
        { id: 40, name: "Lander Hall" },
        { id: 41, name: "Elm Hall" },
        { id: 42, name: "Poplar Hall" },
        { id: 43, name: "Willow Hall" },
        { id: 44, name: "Maple Hall" },
        { id: 45, name: "Madrona Hall" },
        { id: 46, name: "Mercer Court" },
        { id: 47, name: "The Quad" }, // Informal name, central to many academic buildings
        { id: 48, name: "Gowen Hall" },
        { id: 49, name: "Morrill Hall" },
        { id: 50, name: "Anderson Hall" }
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
};

    return (
        <View style={styles.header}>
            <AutocompleteDropdown
                dataSet={suggestions}
                onChangeText={handleSearch}
                onSelectItem={(item) => {
                    if (item) alert(`You selected: ${item.title}`);
                }}
                inputContainerStyle={styles.searchbar}
                textInputProps={{
                    placeholder: "Search here",
                    value: searchText,
                    onChangeText: handleSearch,
                }}
                renderItem={(item) => (
                    <Text style={styles.suggestionItem}>{item.title}</Text>
                )}
            />

            <Button title="I need help" onPress={() => alert("button pressed")} />
            <Button title="Requests near me" onPress={() => alert("button pressed")} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F1E9",
        height: 150,
        padding: 10,
    },
    searchbar: {
        backgroundColor: "white",
        borderColor: "#E5AA7F",
        color: "grey",
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        width: "90%",
    },
    suggestionItem: {
        padding: 10,
        fontSize: 16,
        color: "black",
    },
});



