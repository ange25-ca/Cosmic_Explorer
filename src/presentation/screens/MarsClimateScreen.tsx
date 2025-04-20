//Se consume la API INSIGHT
import { View, Text , StyleSheet, ActivityIndicator, FlatList} from "react-native";
import { MarsViewModel } from "../viewModels/MarsVM";

//Se crea la función para la vista
export default function MarsClimateScreen(){
    //Se llaman al viewModel
    const {data, loading} = MarsViewModel();
    //Se crea un if al loading, con ayuda del ActivityIndicator se coloca el tamaño
    if(loading) return <ActivityIndicator size="large" />;
    return(
      //Se realiza un flatlist con el proposito que se vean como fichas
        <FlatList
            data={data}
            //Se coloca como item a la fecha de cada tarjeta
            keyExtractor={(item, index) => item.date ?? `item-${index}`}
            contentContainerStyle={style.climate}
            renderItem={({ item }) => ( 
            <View style={style.card}>
            <Text style={style.textcard}>Date: {item.date}</Text>
            <Text style={style.textcard}>Temperature: {item.temperatura}°C</Text>
            <Text style={style.textcard}>Minimum temperature:{item.temperaturaMin}°C</Text>
            <Text style={style.textcard}>Maximun temperature: {item.temperaturaMax}°C</Text>
            <Text style={style.textcard}>Wind: {item.viento} m/s</Text>
            </View>

        )} />
    )
}

const style = StyleSheet.create({
    climate: {
        padding: 16,
    },
    card: {
        backgroundColor: "#fff",
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
        elevation: 3,
    },
    textcard: {
        fontSize: 16,
        marginBottom: 4,
      },
})