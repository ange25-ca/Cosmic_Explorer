import {View, Image, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import { useAstronomyViewModel } from '../viewModels/AstronomyVM';

//Se crea una función para la vista
export default function AstronomyDayScreen() {
    //Se uso el ViewModel para el loading y los datos, (imgenes o videos)
    const {data, loading, isImage, isVideo} = useAstronomyViewModel();
    /*Permite cargar el loading, en el AstronomyVM se declara como falso
     en el useEffect, el activityIndicator te permite mostrar la rueda de loading*/
    if (loading) return <ActivityIndicator  
        /*Tamaño*/ size="large" />
    return (
        //Vista principal de AstronomiDay
        <View style={style.astronomyDay}>
                {/*Se muestra el titulo de la imagen */}
          <Text style={style.title}>{data?.title}</Text>
                {/*Si la Api manda una imagen se muestra */}
            {isImage && (<Image source={{uri: data?.url}} style={style.image} resizeMode='cover'/>)}
                {/*Se visualiza la descripcion de la imagen*/}
          <Text style={style.description}>{data?.explanation}</Text>
                {/*En ocasiones la APi devuelve un VIDEO por lo que se mostrata el URL */}
            {isVideo && (<> <Text>Hoy no hay imagen, pero puede ver el video aquí:</Text>
                            <Text style={style.videoText}>{data?.url}</Text></>)}
        </View>
      );
}

//Se crean los estilos de la vista
const style = StyleSheet.create({
    astronomyDay:{
        flex: 1,
        padding: 20,
        alignItems:"center",     
    },
    title:{
        fontSize: 35,
        color: "#000"
    },
    description:{
        fontSize: 15,
        color:"#171818",
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    },
    videoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8
    },
    videoUrl: {
        color: '#00f',
        textDecorationLine: 'underline',
        fontSize: 16
    }
      
})