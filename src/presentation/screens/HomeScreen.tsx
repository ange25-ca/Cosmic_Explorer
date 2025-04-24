import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useThemeColors } from "../hook/themeColors";

export default function HomeScreen() {
    const colors = useThemeColors();
    return(
        <View style={style.home}>
            <Text style={[style.text, {color: colors.text}]}>Bienvenidos a Cosmic Explorer</Text>
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
    }
})