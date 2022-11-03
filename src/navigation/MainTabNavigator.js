import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard/Dashboard";
import SpendingLimit from "../screens/SpendingLimit/SpendingLimit";
import Screen1 from "../screens/Screen1/Screen1";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0C365A",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Spending Limit" component={SpendingLimit} />
        <Tab.Screen name="Screen2" component={Screen1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
