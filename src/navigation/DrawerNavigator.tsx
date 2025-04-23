//Manejo de las Screen en el drawer
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../presentation/screens/HomeScreen";
import AstronomyDayScreen from "../presentation/screens/AstronomyDayScreen";
import EarthPhotos from "../presentation/screens/EarthPhotosScreen";
import NearbyObjects from "../presentation/screens/NearbyObjectsScreen";
import MarsRover from "../presentation/screens/MarsRoversScreen";
import MarsClimateScreen from "../presentation/screens/MarsClimateScreen";
import ThemeToggleButton from "../presentation/components/themeButton";

/* Se crea una constante para la creación del Drawer 
a travez del createDrawerNavigator*/
const Drawer = createDrawerNavigator();

//Se crea el opción para cada screen 
const screenOptions = {
    //Permite que el botón aparezca en el encabezado
    headerRight: () => <ThemeToggleButton/>,
};

const DrawerNavigator = () => {
    return (
            <Drawer.Navigator initialRouteName="Home">
                {/*Vista principal*/}
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={screenOptions}
                />
                {/*Vista de APOD*/}
                <Drawer.Screen
                    name="Astronomy Day"
                    component={AstronomyDayScreen}
                    options={screenOptions}
                />
                {/*Vista de EPIC*/}
                <Drawer.Screen
                    name="Earth Photos"
                    component={EarthPhotos}
                    options={screenOptions}
                />
                {/*Vista de INSIGHT (MARS CLIMATE)*/}
                <Drawer.Screen
                    name="Mars Climate"
                    component={MarsClimateScreen}
                    options={screenOptions}
                />
                {/*Vista de SSD/NEOS (OBJECTS) */}
                <Drawer.Screen
                    name="Nerby Objects"
                    component={NearbyObjects}
                    options={screenOptions}
                />
                {/*Vista de Mars Rover */}
                <Drawer.Screen
                    name="Mars Rovers"
                    component={MarsRover}
                    options={screenOptions}
                />
            </Drawer.Navigator>
    )
}

export default DrawerNavigator;