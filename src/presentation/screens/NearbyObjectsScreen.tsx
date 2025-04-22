//Se consume la API : SSD/NEOS (Permite conocer los objetos más cercanos a la tierra)

import { View , Text, FlatList, ActivityIndicator, Linking, StyleSheet} from "react-native";
import { useNerbyObjtVM } from "../viewModels/NerbyObjVM";

export default function NearbyObjects(){
    //Se llama a la varibles de VM
    const { data, loading } = useNerbyObjtVM();

    if (loading) return <ActivityIndicator size='large'/>;
    //Se realiza un useEffect provicional para prueba de la Api
    return(
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.flat}>
          <Text>Nombre: {item.name}</Text>
          <Text>Magnitud: {item.magnitude}</Text>
          <Text>Diámetro Mínimo: {item.diameterMin} m</Text>
          <Text>Diámetro Máximo: {item.diameterMax} m</Text>
          <Text>Peligroso: {item.Hazardous? 'Sí' : 'No'}</Text>
          <Text>URL: {item.url}</Text>
        </View>
      )}
    />
    )
}

const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: 'center'
    },
    flat: {
      padding: 10, 
      borderBottomWidth: 1
    },
  });