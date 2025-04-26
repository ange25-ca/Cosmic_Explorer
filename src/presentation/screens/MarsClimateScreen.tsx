//Se consume la API INSIGHT
import { View, Text , StyleSheet, ActivityIndicator, FlatList, Platform} from "react-native";
import { MarsViewModel } from "../viewModels/MarsVM";
import { useThemeColors } from "../hook/themeColors";

//Se crea la función para la vista
export default function MarsClimateScreen(){
    //Se llaman al viewModel
    const {data, loading} = MarsViewModel();

    //Se crea la constate para el color de acuerdo al modo
    const color = useThemeColors();
    //Se realiza la validación de plataforma 
    const isWeb = Platform.OS === 'web';
    //Se crea la constante para adecuar al estilo conforme a la plataforma
    const layoutStyle = isWeb ? webStyle : androidStyle;

    //Se crea un if al loading, con ayuda del ActivityIndicator se coloca el tamaño
    if(loading) return <ActivityIndicator size="large" />;
    return(
      //Se realiza un flatlist con el proposito que se vean como fichas
        <FlatList
            data={data}
            //Se coloca como item a la fecha de cada tarjeta
            keyExtractor={(item, index) => item.date ?? `item-${index}`}
            contentContainerStyle={layoutStyle.climate}
            renderItem={({ item }) => ( 
            <View style={[layoutStyle.card, { borderColor: color.card}]}>
            <Text style={[layoutStyle.textcard, {color: color.text}]}>Date: {item.date}</Text>
            <Text style={[layoutStyle.textcard, {color: color.text}]}>Temperature: {item.temperatura}°C</Text>
            <Text style={[layoutStyle.textcard, {color: color.text}]}>Minimum temperature:{item.temperaturaMin}°C</Text>
            <Text style={[layoutStyle.textcard, {color: color.text}]}>Maximun temperature: {item.temperaturaMax}°C</Text>
            <Text style={[layoutStyle.textcard, {color: color.text}]}>Wind: {item.viento} m/s</Text>
            </View>

        )} />
    )
}

//Estilos web
const webStyle = StyleSheet.create({
    climate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        gap: 50,
        padding: 16,
    },
    card: {
        width: 300,
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5
        },
    },
    textcard: {
        fontSize: 16,
        marginBottom: 6,
        textAlign: 'left',
    },
})

//Estilos mobile
const androidStyle = StyleSheet.create({
    climate: {
        padding: 16,
        alignItems: 'center',
    },
    card: {
        width: '90%',
        padding: 16,
        marginBottom: 16,
        borderRadius:10,
        borderWidth:1,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { 
            width: 0, 
            height: 5 },
    },
    textcard: {
        fontSize: 16,
        marginBottom: 6,
        textAlign: 'left',
    },
})