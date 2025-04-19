//Se consume la Api EPIC 
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEarthViewModel } from "../viewModels/EarthVM";

//Se crea la funcion para la vista
export default function EarthPhotos() {
    //Se utiliza las constantes de ViewModel
    const {data, loading} = useEarthViewModel();
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
            contentContainerStyle={style.container}
            renderItem={({ item }) => (
                <View style={style.card}>
                    <Image source={{ uri: item.image }} style={style.image} />
                <Text style={style.caption}>{item.caption}</Text>
                </View>
            )}>

        </FlatList>
    )
}

const style = StyleSheet.create({
    earthPhotos: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: { 
        padding: 10 
    },
    card: { 
        marginBottom: 20, 
        alignItems: 
        'center' 
    },
    image: { 
        width: 300, 
        height: 300, 
        borderRadius: 
        10 },
    caption: { 
        marginTop: 10, 
        fontSize: 16, 
        color: '#333', 
        textAlign: 'center' 
    }
}) 

    
