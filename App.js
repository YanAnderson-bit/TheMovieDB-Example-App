
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import SynopseScreen from './screens/SynopseScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown:false 
          }}
        />
        <Stack.Screen 
          name="Sobre" 
          component={SynopseScreen}
          options={{
            headerShown:false 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30
  },
});
