import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons

const { width } = Dimensions.get('window');

const bikes = [
  { location: 'Downtown', timesRented: 10, alt: 'Bike at Downtown', rented: true },
  { location: 'Uptown', timesRented: 7, alt: 'Bike at Uptown', rented: false },
  { location: 'Suburb', timesRented: 5, alt: 'Bike at Suburb', rented: true },
  { location: 'Park', timesRented: 15, alt: 'Bike at Park', rented: false },
  { location: 'Beach', timesRented: 8, alt: 'Bike at Beach', rented: true },
  { location: 'City Center', timesRented: 12, alt: 'Bike at City Center', rented: false },
  { location: 'Mountain', timesRented: 3, alt: 'Bike at Mountain', rented: true },
  { location: 'Village', timesRented: 6, alt: 'Bike at Village', rented: false },
  { location: 'Lake', timesRented: 4, alt: 'Bike at Lake', rented: true },
];

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cycle</Text>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchBar} placeholder="Rent Now..." />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {bikes.map((bike, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <View style={[styles.radioButton, bike.rented ? styles.rented : styles.notRented]} />
              <Text>{bike.alt}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Location: {bike.location}</Text>
              <Text style={styles.cardText}>Times Rented: {bike.timesRented}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between title and menu button
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: '#40E0D0', // Turquoise color
    width: '100%',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: '#fff', // White color
  },
  menuButton: {
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.4,  // Reduced width for better responsiveness
    height: 220,  // Increased height
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 10,  // Add margin for spacing between cards
    backgroundColor: '#40E0D0', // Turquoise color for cards
  },
  imagePlaceholder: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'flex-end', // Align text to the bottom
    alignItems: 'flex-start', // Align text to the left
  },
  cardText: {
    color: '#fff', // White color
  },
  radioButton: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  rented: {
    backgroundColor: 'red', // Red for rented
  },
  notRented: {
    backgroundColor: 'green', // Green for not rented
  },
});

export default App;
