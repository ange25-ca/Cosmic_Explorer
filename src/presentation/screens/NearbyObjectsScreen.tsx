//Se consume la API : SSD/NEOS (Permite conocer los objetos más cercanos a la tierra)

import { useEffect } from "react";
import { View , Text} from "react-native";
import Apis from "../../data/datasources/AppApis";

export default function NearbyObjects(){
    //Se realiza un useEffect provicional para prueba de la Api
    useEffect(()=> {
        const fetchApod = async () => {
            const api = Apis.getInstance();
            try{
            await api.getNEOS(); 
        }catch (error) {
            console.error(" Error desde Screen:", error)
        }
        };
        fetchApod();
    },[]);
    return(
        <View>
            <Text> Podras ver que los objetos que más esten cerca</Text>
        </View>
    )
}