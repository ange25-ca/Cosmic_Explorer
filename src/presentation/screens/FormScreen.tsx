import { Alert, View , StyleSheet, Platform} from "react-native";
import FormSelect from "../components/FormDinamic";
import { useNavigation } from "@react-navigation/native";
import { useForm , Controller} from "react-hook-form";
import { FormResponse } from "../../types/FormResponse";
import { FormService } from "../../services/FormService";

//Se crea la funcion para la pantalla del formulario
export default function FormScreen (){
    //Constante para navegación 
    const navigation = useNavigation();

    //Se utilizanlos valores iniciales del formulario
    const { control, handleSubmit, reset } = useForm({
      //Como el formulario es de selccion
        defaultValues: {
          //Se inicia Nulo
            selectedOption: null,
        },
    });
    
    // Cuando se envía el formulario
  const onSubmit = async (data: any) => {
    try {
      const response: FormResponse = {
        response: data.selectedOption,
        timestamp: new Date().toISOString(),
      };

      await FormService.saveResponse(response);

      if (Platform.OS === 'web') {
        window.alert('¡Gracias! Tu respuesta ha sido guardada');
      } else {
        Alert.alert('¡Gracias!', 'Tu respuesta ha sido guardada');
      }

      reset(); 
      //Cierra la vista
      navigation.goBack(); 

    } catch (error) {
      if (Platform.OS === 'web') {
        window.alert('Selecciona una opción antes de enviar');
      } else {
        Alert.alert('Selecciona una opción antes de enviar');
      }
    }
  };
    return (
        <View style={styles.container}>
           <FormSelect 
                control={control} onSubmit={handleSubmit(onSubmit)} 
            />
        </View>
    )
}

//Se crea los estilos correspondientes 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
  })