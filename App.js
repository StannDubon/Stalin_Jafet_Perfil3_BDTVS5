import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screen1 from './src/components/Screen1';
import screen2 from './src/components/Screen2'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="screen2">
        <Tab.Screen
          name="screen2" 
          component={screen2} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color="green" />
            ),
          }}
        />
        <Tab.Screen 
          name="Comidas" 
          component={screen1} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color="green" /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}