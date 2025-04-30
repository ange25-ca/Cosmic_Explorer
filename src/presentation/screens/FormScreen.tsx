import { Alert, View , StyleSheet} from "react-native";
import { useFormVM } from "../viewModels/FormVM"
import FormSelect from "../components/FormDinamic";

//Se crea la funcion para la pantalla del formulario
export default function FormScreen (){
    //Se obtienen las constantes de de VM
    const { selectedOption, setSelectedOption, submitResponse} = useFormVM();

    //Manejo de la respuesta cuando se envia la encuesta
    const handlesubmit = async () => {
        try {
            await submitResponse();
            Alert.alert('¡Gracias!', 'tu respuesta ha sido guardada.');
        }
        catch(erro) {
            Alert.alert('Error', 'Selecciona una opcion antes de enviar.');
        }
    }

    return (
        <View style={styles.container}>
           <FormSelect 
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onSubmit={handlesubmit} 
            />
        </View>
    )
}

//Se crea los estilos correspondientes 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });