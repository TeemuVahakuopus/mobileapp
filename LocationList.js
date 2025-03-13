import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LocationsList({ navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const storedLocations = await AsyncStorage.getItem("locations");
      if (storedLocations) {
        setLocations(JSON.parse(storedLocations));
      }
    };
    loadLocations();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Map", { location: item })}>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Rating: {item.rating}/5</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, marginBottom: 10, backgroundColor: "#eee", borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold" }
});

