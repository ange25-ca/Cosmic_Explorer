import { View, Text, Platform, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useThemeColors } from "../hook/themeColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigatorTypes";
import { StackNavigationProp } from "@react-navigation/stack";

{/*Para que typescript reconozca las rutas, se maneja como props, se le dice por medio 
del tipado en NavigatorType las rutas que puede tomar la pantalla homeScreen*/}
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function HomeScreen() {

    //Se evalua si esta en web
    const isWeb = Platform.OS === 'web';
    //Se crea una constante para aplicar el diseño conforme a la plataforma
    const layoutStyle = isWeb ? webStyles : androidStyles;
    //Se llaman los colores de cada tema
    const colors = useThemeColors();
    //Se crea la constante para la navegación 
    const navigation = useNavigation<HomeScreenNavigationProp>();
    //Función flecha que permite abrir el Modal
    const openModal = () => {
        navigation.navigate('Forms'); 
      };

    return(
        <View style={layoutStyle.home}>
            <Text style={[layoutStyle.title, { color: colors.text }]}>Bienvenidos a  Cosmic Explorer</Text>
            {/*Se crea el botón para abrir el modal */}
            <TouchableOpacity onPress={openModal} style={[layoutStyle.button, {backgroundColor: colors.background}]}>
                <Text style={[layoutStyle.buttonText, { color: colors.text }]}>Abrir Modal</Text>
            </TouchableOpacity>
        </View>
    )
}

const webStyles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        marginTop: -50,
        fontSize: 65
    },
    text:{
        fontSize: 80,
    },
    button: {
        paddingVertical: 10,         
        paddingHorizontal: 20,       
        borderRadius: 5,            
      },
      buttonText: {
        fontSize: 18,               
      },
})

const androidStyles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontSize: 30,
        fontWeight: 500,
    },
    text:{
        fontSize: 45,
    },
    button: {
        paddingVertical: 10,         
        paddingHorizontal: 20,      
        borderRadius: 5,            
      },
      buttonText: {
        fontSize: 18,               
      },
})