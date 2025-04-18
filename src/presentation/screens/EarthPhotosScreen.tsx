//Se consume la Api EPIC 
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Apis from "../../data/datasources/AppApis";

//Se crea la funcion para la vista
export default function EarthPhotos() {
    //Se realiza un useEffect provicional para prueba de la Api
    useEffect(()=> {
        const fetchApod = async () => {
            const api = Apis.getInstance();
            try{
            await api.getEpic(); 
        }catch (error) {
            console.error(" Error desde Screen:", error)
        }
        };
        fetchApod();
    },[]);

    return (
        <View style={style.earthPhotos}>
            <Text> Bienvenido a las imagenes de la tierra</Text>
        </View>
    )
}

const style = StyleSheet.create({
    earthPhotos: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})