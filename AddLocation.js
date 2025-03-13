import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddLocation({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const saveLocation = async () => {
    if (!name || !description || !rating) {
      Alert.alert("Please fill all fields");
      return;
    }

    const newLocation = { name, description, rating };
    const storedLocations = await AsyncStorage.getItem("locations");
    const locations = storedLocations ? JSON.parse(storedLocations) : [];
    locations.push(newLocation);
    await AsyncStorage.setItem("locations", JSON.stringify(locations));
    navigation.navigate("Locations");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Location Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Rating (1-5)" keyboardType="numeric" onChangeText={setRating} />
      <Button title="Save Location" onPress={saveLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});
