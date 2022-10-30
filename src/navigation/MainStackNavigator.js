import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard/Dashboard";
import SpendingLimit from "../screens/SpendingLimit/SpendingLimit";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Spending Limit" component={SpendingLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
