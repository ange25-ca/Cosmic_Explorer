//Consume la API: MARS ROVER

import { StyleSheet, Image, ActivityIndicator, FlatList, Platform, View} from "react-native";
import { useMarsRViewModel } from "../viewModels/MarsRVM";
import { useThemeColors } from "../hook/themeColors";

//Se crea la funcion para la vista
export default function MarsRover(){
    //Se llama al viewModel
    const {data, loading} = useMarsRViewModel();
    //Se llama a los colores apropiados para cada tema
    const color = useThemeColors();
    //Se realiza las validaciones de las plataforma
    const isWeb = Platform.OS === 'web';
    //Se coloca el estilo adecuado para cada plataforma
    const layoutStyle = isWeb ? webStyle : androidStyle;

    //Se realiza la valoracion del loading 
    if(loading) return <ActivityIndicator size="large"/>

    return(
        <FlatList 
        data={data}
        keyExtractor={(item)=> item.id.toString()}
        contentContainerStyle={layoutStyle.container}
        renderItem={({item}) => (
        <View style={layoutStyle.card}>
            <Image 
            source={{uri : item.img_src}}
            style={layoutStyle.img}
            resizeMode="cover"
            />
        </View>
        )}
        />
    )

}

//Estilos para web
const webStyle = StyleSheet.create({
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
    img:{
        width: "100%",
        height: 200,
        marginBottom: 10,
    }
})

//estilos para mobile
const androidStyle = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginBottom: 20,
        margin: 15,
        alignItems: 'center',
    },
    img:{
        width: "100%",
        height: 200,
        marginBottom: 10
    }
})