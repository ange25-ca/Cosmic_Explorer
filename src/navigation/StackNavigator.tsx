import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import DrawerNavigator from "./DrawerNavigator";
import FormScreen from "../presentation/screens/FormScreen";
import { TopTabsNavigator } from "./TabsNavigator";
import { RootStackParamList } from "../types/navigatorTypes";

//Se cre una navegación stack con tipado de rutas (Typescript las reconozca)
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  //Se crea la constante para indicar si es navegación web
  const isWeb = Platform.OS === 'web';
  return (
      <Stack.Navigator>
        {/* Se hace una condicional de la navigación, si es web navegación en Tabs y 
        si es android sera Drawer */}
        <Stack.Screen 
          name="Main" 
          component={isWeb ? TopTabsNavigator : DrawerNavigator} 
          options={{ headerShown: false }} 
        />

        {/* Se crea la ruta para el modal */}
        <Stack.Screen 
          name="Forms" 
          component={FormScreen} 
          options={{ 
            //Propiedad que lo define como modal
            presentation: 'modal',
            headerShown: false,
           }} 
        />
      </Stack.Navigator>
  );
}