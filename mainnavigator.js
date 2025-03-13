import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationsList from "../screens/LocationList";
import AddLocation from "../screens/AddLocation";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Locations" component={LocationsList}/>
      <Tab.Screen name="Add Location" component={AddLocation} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}
