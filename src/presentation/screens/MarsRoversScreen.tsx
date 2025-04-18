//Consume la API: MARS ROVER

import { useEffect } from "react";
import { View , Text} from "react-native";
import Apis from "../../data/datasources/AppApis";


export default function MarsRover(){
    //Se realiza un useEffect provicional para prueba de la Api
    useEffect(()=> {
        const fetchApod = async () => {
            const api = Apis.getInstance();
            try{
            await api.getMarsR(); 
        }catch (error) {
            console.error(" Error desde Screen:", error)
        }
        };
        fetchApod();
    },[]);
    return(
        <View>
            <Text>A continuación veras imagenes de marte:</Text>
        </View>
    )

}