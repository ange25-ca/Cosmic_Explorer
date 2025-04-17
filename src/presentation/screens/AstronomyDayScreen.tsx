import { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Apis from '../../data/datasources/AppApis';


export default function AstronomyDayScreen() {
    //Se realiza un useEffect provicional para prueba de la Api
    useEffect(()=> {
        const fetchApod = async () => {
            const api = Apis.getInstance();
            try{
            await api.getApod(); 
        }catch (error) {
            console.error(" Error desde Screen:", error)
        }
        };
        fetchApod();
    },[]);

    return(
        <View style={style.astronomyDay}>
            <Text>Estas son las imagenes del dia</Text>
        </View>
    )
}

const style = StyleSheet.create({
    astronomyDay:{
        flex: 1,
        justifyContent: "center",  
        alignItems: "center"       
    }
})