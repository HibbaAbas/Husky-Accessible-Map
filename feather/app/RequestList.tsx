import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Button, Text as TextRneui } from '@rneui/themed';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export default function RequestList() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <>
      <View style={styles.container}>
            <Text style={styles.title}>Request</Text>
            <Card containerStyle={styles.card}>
                <TextRneui h4 style={styles.cardTitle}>Sophia</TextRneui>
                <TextRneui style={styles.cardDescription}>
                    Needs help opening ground floor to Mary Gates Hall
                </TextRneui>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestList')}>
                    <Text style={styles.buttonText}>LEND A WING</Text>
                </TouchableOpacity>
            </Card>
            <Card containerStyle={styles.card}>
                <TextRneui h4 style={styles.cardTitle}>Aarnav</TextRneui>
                <TextRneui style={styles.cardDescription}>
                    Kane Hall elevator broken; needs to get down stairs and carry DESIGN 166 supplies
                </TextRneui>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestList')}>
                    <Text style={styles.buttonText}>LEND A WING</Text>
                </TouchableOpacity>
            </Card>
            <Card containerStyle={styles.card}>
                <TextRneui h4 style={styles.cardTitle}>Ky</TextRneui>
                <TextRneui style={styles.cardDescription}>
                    Pain flare up at Sieg Hall; need help getting to Health Center
                </TextRneui>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestList')}>
                    <Text style={styles.buttonText}>LEND A WING</Text>
                </TouchableOpacity>
            </Card>
        </View>
        
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      padding: 20,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20, // Space between the title and the card
      color: '#333',
  },
  card: {
      width: '90%', // Make the card responsive
      padding: 20, // Add padding inside the card
      borderRadius: 12, // Rounded corners
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
  },
  cardTitle: {
      marginBottom: 10, // Space between the title and description
      textAlign: 'center', // Center the title
      color: '#444',
  },
  cardDescription: {
      marginBottom: 20, // Space between the description and button
      textAlign: 'center', // Center the description
      color: '#666',
      fontSize: 16,
  },
  button: {
      alignSelf: 'center', // Center the button horizontally in the card
      backgroundColor: '#E5AA7F',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});