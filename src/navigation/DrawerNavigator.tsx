//Manejo de las Screen en el drawer
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../presentation/screens/HomeScreen";
import AstronomyDayScreen from "../presentation/screens/AstronomyDayScreen";

/* Se crea una constante para la creación del Drawer 
a travez del createDrawerNavigator*/
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            {/*Vista principal*/}
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
            {/*Vista de APOD*/}
            <Drawer.Screen
                name="Astronomy Day"
                component={AstronomyDayScreen}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;