import "react-native-gesture-handler";
import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./src/store/store";
import { TopTabsNavigator } from "./src/navigation/TabsNavigator";

/*Se activa la optimización de las screens */
enableScreens();

//Se crea una función para el uso de redux
const AppRedux = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  //Se crea la varible para determinar en que pantalla se encuentra
  const isWeb = Platform.OS === "web";

  return(
    <NavigationContainer theme={theme == 'dark' ? DarkTheme : DefaultTheme}>
      {/*Dependiendo en que plataforma este se vera la navegación 
      para Android: Drawer , para web: Tabs*/}
      {isWeb ? <TopTabsNavigator/> : <DrawerNavigator/>}
    </NavigationContainer> 
  )
}

export default function App() {
  return (
    /*Se envuelve en GestureHandlerRootView 
    con el fin de colocar animaciones en el drawer*/
    <Provider store={store}>
    <GestureHandlerRootView style={style.app}>
      <AppRedux />
    </GestureHandlerRootView> 
    </Provider>
  );
}

const style = StyleSheet.create({
  app:{
    flex: 1
  }
})
