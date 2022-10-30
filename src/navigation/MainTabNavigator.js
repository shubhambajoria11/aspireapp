import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard/Dashboard";
import SpendingLimit from "../screens/SpendingLimit/SpendingLimit";

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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
