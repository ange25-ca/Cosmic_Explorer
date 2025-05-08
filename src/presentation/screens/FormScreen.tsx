import { Alert, View , StyleSheet, Platform} from "react-native";
import FormSelect from "../components/FormDinamic";
import { useNavigation } from "@react-navigation/native";
import { useForm , Controller} from "react-hook-form";
import { FormResponse } from "../../types/FormResponse";
import { FormService } from "../../services/FormService";
import { useEffect, useState } from "react";

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
    
    /*Se crea las constante para el estado del formulario */
    const [ isCompleted, setItemCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // ← nueva bandera


  useEffect(() => {
    /*Se realiza un chequeo del estado */
    const checkStatus = async () => {
      const completed = await FormService.isFormCompleted();
      setItemCompleted(completed);

      /*Dependeindo de que plataforma sea muestra una alerta */
      if (completed) {
        if (Platform.OS === 'web') {
          window.alert('Ya has respondido');
        } else {
          Alert.alert('Encuesta completada, Solo se responde una vez')
        }
        navigation.goBack();
      } else {
        setIsLoading(false);
      }
    };
    checkStatus();
  }, []);



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

  if (isLoading){
    return null;
  }
  
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