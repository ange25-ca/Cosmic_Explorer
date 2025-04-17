import {View, Text, StyleSheet} from 'react-native';

export default function AstronomyDayScreen() {
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