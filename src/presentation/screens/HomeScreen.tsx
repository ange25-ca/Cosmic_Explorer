import { View, Text, Platform } from "react-native";
import { StyleSheet } from "react-native";
import { useThemeColors } from "../hook/themeColors";
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming
} from 'react-native-reanimated';
import { useEffect } from "react";

//Se hace una referencia a la animación 
const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function HomeScreen() {

    //Se evalua si esta en web
    const isWeb = Platform.OS === 'web';
    //Se crea una constante para aplicar el diseño conforme a la plataforma
    const layoutStyle = isWeb ? webStyles : androidStyles;
    //Se llaman los colores de cada tema
    const colors = useThemeColors();

    //Se inicializa la animacion en 0
    const translateY = useSharedValue(0);

    //Se usa un useEfect para la animación
    useEffect(() => {
        translateY.value = withRepeat(
            withTiming(30, {duration, easing}), 
            //El 1 de duracion permite que sea repetitivo
            -1,
            //Hace que suba y baje el texto
            true
        )
    }, []);

    //Se actualiza la posicion del teclado atravez de la presente función
    const animatedStyle = useAnimatedStyle(() => ({
        transform:[{ translateY: translateY.value}],
    }));

    return(
        <View style={layoutStyle.home}>
           <Text style= {[layoutStyle.title, {color: colors.text}]}>Bienvenidos a </Text> 
            <Animated.Text 
                style={[ layoutStyle.text, {
                    color: colors.text,
                },
                //Se llama a la funcion 
                animatedStyle,
            ]}
            > 
            Cosmic Explorer
            </Animated.Text>
            
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
    }
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
    }
})