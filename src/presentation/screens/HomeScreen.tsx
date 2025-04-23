import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    return(
        <View style={style.home}>
            <Text style={style.text}>Bienvenidos a Cosmic Explorer</Text>
        </View>
    )
}

const style = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 30,
        color: "#fff"
    }
})