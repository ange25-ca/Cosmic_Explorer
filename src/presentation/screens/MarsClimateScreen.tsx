//Se consume la API INSIGHT
import { useEffect } from "react";
import { View, Text , StyleSheet} from "react-native";
import Apis from "../../data/datasources/AppApis";

//Se crea la función para la vista
export default function MarsClimate(){
    //Se realiza un useEffect provicional para prueba de la Api
    useEffect(()=> {
        const fetchApod = async () => {
            const api = Apis.getInstance();
            try{
            await api.getInsight(); 
        }catch (error) {
            console.error(" Error desde Screen:", error)
        }
        };
        fetchApod();
    },[]);
    return(
        <View style={style.climate}>
            <Text> El clima de marte es: </Text>
        </View>
    )
}

const style = StyleSheet.create({
    climate: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})