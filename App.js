import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import React from "react";
import LogIn from "./screens/LogIn";
import Profile from "./screens/Profile";
import EmployeeList from "./screens/EmployeeList";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#333" style="light" />
      <Stack.Navigator initialRoute="{LogIn}" >
        <Stack.Screen 
        name="LogIn" 
        component={LogIn} 
        options={{headerShown : false}}
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{headerShown : false}}
        />
        <Stack.Screen 
        name="Employee" 
        component={EmployeeList} 
        options={{
          title: 'Employee List',
          headerStyle: {
            backgroundColor: '#3D4652',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
        // options={{headerShown : false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


