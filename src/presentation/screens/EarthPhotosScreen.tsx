//Se consume la Api EPIC 
import { View, Text, Image, StyleSheet, ActivityIndicator, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEarthViewModel } from "../viewModels/EarthVM";
import { useThemeColors } from "../hook/themeColors";

//Se crea la funcion para la vista
export default function EarthPhotos() {
    //Se utiliza las constantes de ViewModel
    const {data, loading} = useEarthViewModel();
    //Se llama a los colores por mod
    const colors = useThemeColors();
    //Se realiza la validación de la plataforma
    const isWeb = Platform.OS === 'web';
    //se crea la constante para la plataforma para cada estilo
    const layoutStyle = isWeb ? webStyles : androidStyles;

    //El loading se mantiene mientras se carga la Api
    if(loading) {
        //Se utiliza el ActivityIndicator para el icon
        return <ActivityIndicator size="large"/>;
    }
    return (
        //Se utiliza un FlatList para las imagenes
        <FlatList
            //Se obtiene los datos
            data={data}
            //Se obtiene la fecha
            keyExtractor={(item) => item.date}
            contentContainerStyle={layoutStyle.container}
            renderItem={({ item }) => (
                <View style={layoutStyle.card}>
                    <Image source={{ uri: item.image }} style={layoutStyle.image} />
                <Text style={[layoutStyle.caption, {color: colors.text}]}>{item.caption}</Text>
                </View>
            )}>

        </FlatList>
    )
}

//estilos para web
const webStyles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 300,
        margin: 15,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    caption: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});


//Diseño para mobile
const androidStyles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginBottom: 20,
        margin: 15,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    caption: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

    
