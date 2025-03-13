import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  const { location } = route.params || {};
  const coordinates = location
    ? {
        latitude: parseFloat(location.latitude), 
        longitude: parseFloat(location.longitude), 
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : {
        latitude: 60.1695,
        longitude: 24.9354,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coordinates}>
        {location && (
          <Marker coordinate={coordinates} title={location.name} />
        )}
      </MapView>
      {location ? (
        <Text style={styles.info}>Showing: {location.name}</Text>
      ) : (
        <Text style={styles.info}>Select a location</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  info: { padding: 20, fontSize: 18, textAlign: "center" },
});
