//Manejo de las Screen en el drawer
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../presentation/screens/HomeScreen";
import AstronomyDayScreen from "../presentation/screens/AstronomyDayScreen";
import EarthPhotos from "../presentation/screens/EarthPhotosScreen";
import MarsClimate from "../presentation/screens/MarsClimateScreen";
import NearbyObjects from "../presentation/screens/NearbyObjectsScreen";
import MarsRover from "../presentation/screens/MarsRoversScreen";

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
            {/*Vista de EPIC*/}
            <Drawer.Screen 
                name="Earth Photos"
                component={EarthPhotos} 
            />
            {/*Vista de INSIGHT (MARS CLIMATE)*/}
            <Drawer.Screen 
                name="Mars Climate"
                component={MarsClimate}
            />
            {/*Vista de SSD/NEOS (OBJECTS) */}
            <Drawer.Screen 
                name="Nerby Objects"
                component={NearbyObjects}
            />
            {/*Vista de Mars Rover */}
            <Drawer.Screen 
                name="Mars Rovers"
                component={MarsRover}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;