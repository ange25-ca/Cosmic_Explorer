import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

enableScreens();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <DrawerNavigator/> 
      </NavigationContainer>
    </GestureHandlerRootView> 
  );
}