import { View, Text, Platform, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useThemeColors } from "../hook/themeColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigatorTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

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

    //Se crea un valor para inicializar la animación
    const float = useSharedValue(0);
    //Función para la animación
    useEffect(() => {
        float.value = withRepeat(
            //Se altera el valor inicial de la animación
            withTiming(-10, { duration: 1000 }),
            //Permite que sea infinito
            -1,
            //Permite revertir la animación (ping-pong)
            true
        );
    }, []);
    //Se usa para una tranformaciónn respecto a los ejes
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: float.value }],
    }));

    return(
        <View style={layoutStyle.home}>
            <Text style={[layoutStyle.title, { color: colors.text }]}>Welcome to Cosmic Explorer</Text>
            {/*Se crea el botón para abrir el modal */}
            <Animated.View style={[animatedStyle, layoutStyle.floatingButtonContainer]}>
            <TouchableOpacity onPress={openModal} style={[layoutStyle.button]}>
                 <Ionicons name="planet" size={64} color="#7F00FF" />
                {/*<Text style={[layoutStyle.buttonText, { color: colors.text }]}>Abrir Modal</Text>*/}
            </TouchableOpacity>
            </Animated.View>
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
        fontSize: 65,
    },
    text:{
        fontSize: 80,
    },
    button: {
        paddingVertical: 50,         
        paddingHorizontal: 20, 
        borderRadius: 5,  
      },
      buttonText: {
        fontSize: 18,               
      },
    floatingButtonContainer: {
        position: 'absolute',
        top: 400,  
        right: 50, 
        zIndex: 1, 
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
        margin: 20,
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center'
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
    floatingButtonContainer: {
        position: 'relative',
        bottom: 10,  
        zIndex: 1,
    },
})