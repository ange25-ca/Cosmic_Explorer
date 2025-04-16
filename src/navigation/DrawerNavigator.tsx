//Manejo de las Screen en el drawer
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../presentation/screens/HomeScreen";

/* Se crea una constante para la creación del Drawer 
a travez del createDrawerNavigator*/
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;