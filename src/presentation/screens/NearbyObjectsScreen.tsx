//Se consume la API : SSD/NEOS (Permite conocer los objetos más cercanos a la tierra)

import { View , Text, FlatList, ActivityIndicator, Linking, StyleSheet, Platform} from "react-native";
import { useNerbyObjtVM } from "../viewModels/NerbyObjVM";
import { useThemeColors } from "../hook/themeColors";

export default function NearbyObjects(){
    //Se llama a la varibles de VM
    const { data, loading } = useNerbyObjtVM();
    //Variable para el cambio de colores segun el texto
    const color = useThemeColors();
    //Se realiza la varible para la identificación de la plataforma
    const isWeb = Platform.OS === 'web';
    const layoutStyle = isWeb ? webStyle : androidStyle;

    if (loading) return <ActivityIndicator size='large'/>;
    //Se realiza un useEffect provicional para prueba de la Api
    return(
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={layoutStyle.container}
      renderItem={({ item }) => (
        <View style={[layoutStyle.flat, {borderColor: color.card}]}>
          <Text style={[layoutStyle.text, {color: color.text}]}>Name: {item.name}</Text>
          <Text style={[layoutStyle.text, {color: color.text}]}>Magnitud: {item.magnitude}</Text>
          <Text style={[layoutStyle.text, {color: color.text}]}>Diameter Mín: {item.diameterMin} m</Text>
          <Text style={[layoutStyle.text, {color: color.text}]}>Diameter Máx: {item.diameterMax} m</Text>
          <Text style={[layoutStyle.text, {color: color.text}]}>Hazardous: {item.Hazardous? 'Sí' : 'No'}</Text>
        </View>
      )}
    />
    )
}

//Estilos para web
const webStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    gap: 30,
    padding: 10,
  },
  flat: {
    width: 400,
    margin: 10,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
        width: 0,
        height: 5
    },
  },
  text:{
    fontSize: 15,
    textAlign:'left',
    marginBottom: 6,
  }
});

//Estilos para mobile
const androidStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 5,
    alignItems: 'center',
  },
  flat: {
    width: '90%',
    padding: 16,
    marginBottom: 16,
    borderRadius:10,
    borderWidth:1,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { 
        width: 0, 
        height: 5 },
  },
  text:{
    fontSize:16
  }
});
