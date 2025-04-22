//Consume la API: MARS ROVER

import { StyleSheet, Image, ActivityIndicator, FlatList} from "react-native";
import { useMarsRViewModel } from "../viewModels/MarsRVM";

//Se crea la funcion para la vista
export default function MarsRover(){
    //Se llama al viewModel
    const {data, loading} = useMarsRViewModel();
    //Se realiza la valoracion del loading 
    if(loading) return <ActivityIndicator size="large"/>
    return(
        <FlatList 
        data={data}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item}) => (
            <Image 
            source={{uri : item.img_src}}
            style={style.img}
            resizeMode="cover"
            />
        )}
        />
    )

}

const style = StyleSheet.create({
    img:{
        width: "100%",
        height: 200,
        marginBottom: 10
    }
})