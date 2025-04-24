import {View, Image, Text, StyleSheet, ActivityIndicator, ScrollView, Platform} from 'react-native';
import { useAstronomyViewModel } from '../viewModels/AstronomyVM';
import { useThemeColors } from '../hook/themeColors';

//Se crea una función para la vista
export default function AstronomyDayScreen() {
    //Se uso el ViewModel para el loading y los datos, (imgenes o videos)
    const { data, loading, isImage, isVideo } = useAstronomyViewModel();
    //Se agrega los colores dinamicos 
    const colors = useThemeColors();

    //Se evalua si esta en web
    const isWeb = Platform.OS === 'web';
    //Se crea una constante para aplicar el diseño conforme a la plataforma
    const layoutStyle = isWeb ? webStyles : androidStyles;

    /*Permite cargar el loading, en el AstronomyVM se declara como falso
     en el useEffect, el activityIndicator te permite mostrar la rueda de loading*/
    if (loading) return <ActivityIndicator
        /*Tamaño*/ size="large" />
    return (
        //Vista principal de AstronomiDay
        <View style={layoutStyle.container}>
            <View style={layoutStyle.leftColumn}>
                {/*Se muestra el titulo de la imagen */}
                <Text style={[layoutStyle.title, { color: colors.text }]}>{data?.title}</Text>
                {/*Si la Api manda una imagen se muestra */}
                {isImage && (<Image source={{ uri: data?.url }} style={layoutStyle.image} resizeMode='cover' />)}
            </View>
            {/*Se visualiza la descripcion de la imagen*/}
            <View style={layoutStyle.rightColumn}>
                <Text style={[layoutStyle.description, { color: colors.text }]}>{data?.explanation}</Text>
            </View>
            {/*En ocasiones la APi devuelve un VIDEO por lo que se mostrata el URL */}
            {isVideo && (<> <Text>Hoy no hay imagen, pero puede ver el video aquí:</Text>
                <Text style={[layoutStyle.videoText, { color: colors.text }]}>{data?.url}</Text></>)}
        </View>
    );
}

//Se crean los estilos para cada plataforma
//Se crea los estilos para web
const webStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 20
    },
    leftColumn: {
        flex: 1,
        alignItems: 'center'
    },
    rightColumn: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 600,
        height: 450,
        marginTop: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 500,
        alignItems: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 55,
        marginRight: 50
    },
    videoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8
    },
})

//Se crea los estilos para android
const androidStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    leftColumn: {
        width: '100%',
        alignItems: 'center',
    },
    rightColumn: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: 360,
        height: 250,
        marginTop: 15,
    },
    title: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: 500,
        alignItems: 'center'
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        padding: 15
    },
    videoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8
    },
})