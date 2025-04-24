//Manejo de las view con tabs 
import HomeScreen from "../presentation/screens/HomeScreen";
import AstronomyDayScreen from "../presentation/screens/AstronomyDayScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EarthPhotos from "../presentation/screens/EarthPhotosScreen";
import MarsClimateScreen from "../presentation/screens/MarsClimateScreen";
import NearbyObjects from "../presentation/screens/NearbyObjectsScreen";
import MarsRover from "../presentation/screens/MarsRoversScreen";
import { useThemeColors } from "../presentation/hook/themeColors";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import ThemeToggleButton from "../presentation/components/themeButton";


//Se crea la constante para el tabs 
const Tab = createMaterialTopTabNavigator();

//Se crea la función para la navegación 
export function TopTabsNavigator() {
    //Constante para el cambio de color
    const colors = useThemeColors();
    const dispatch = useDispatch();
    
    return (
        <View style={{ flex: 1 }}>
            {/* Botón para cambiar tema (modo claro/oscuro) */}
            <View
                style={{
                    backgroundColor: colors.background,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    alignItems: 'flex-end',
                }}
            >
                <ThemeToggleButton />
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: colors.background },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.text,
                    tabBarIndicatorStyle: { backgroundColor: colors.primary },
                    tabBarLabelStyle: { fontWeight: 'bold' },

                }}>
                {/*Primera Principal*/}
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                {/*Vista de APOD */}
                <Tab.Screen
                    name="Astronomy Day"
                    component={AstronomyDayScreen}
                />
                {/*Vista de EPIC*/}
                <Tab.Screen
                    name="Earth Photos"
                    component={EarthPhotos}
                />
                {/*Vista de INSIGHT (MARS CLIMATE)*/}
                <Tab.Screen
                    name="Mars Climate"
                    component={MarsClimateScreen}
                />
                {/*Vista de SSD/NEOS (OBJECTS) */}
                <Tab.Screen
                    name="Nerby Objects"
                    component={NearbyObjects}
                />
                {/*Vista de Mars Rover */}
                <Tab.Screen
                    name="Mars Rovers"
                    component={MarsRover}
                />
            </Tab.Navigator>
        </View>
    )
}