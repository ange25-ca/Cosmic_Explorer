import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

/*Se activa la optimización de las screens */
enableScreens();

export default function App() {
  return (
    /*Se envuelve en GestureHandlerRootView 
    con el fin de colocar animaciones en el drawer*/
    <GestureHandlerRootView style={style.app}>
      <NavigationContainer>
        <DrawerNavigator/> 
      </NavigationContainer>
    </GestureHandlerRootView> 
  );
}

const style = StyleSheet.create({
  app:{
    flex: 1
  }
})