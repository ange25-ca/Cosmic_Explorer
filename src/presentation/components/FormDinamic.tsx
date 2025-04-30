import { TouchableOpacity, View, Text, Button , StyleSheet} from "react-native";
import { FormOption } from "../../data/models/FormField";

//Se realiza la definicion de la interfaz
interface FormSelectProps {
  //Opción para seleccionar
  selectedOption: string | null;
  //Permite actualizar la opción seleccionada
  setSelectedOption: (option: string) => void;
  //Permite enviar la respuestas
  onSubmit: () => void;
}

//Se crea la constante donde se definen laas opciones a seleccionar
const options : FormOption[] = [
  { label: '😃 Muy Satisfecho', value: 'muy_satisfecho' },
  { label: '🙂 Satisfecho', value: 'satisfecho' },
  { label: '😐 Neutral', value: 'neutral' },
  { label: '🙁 Insatisfecho', value: 'insatisfecho' },
  { label: '😡 Muy Insatisfecho', value: 'muy_insatisfecho' },
]; 

//Se crea una constante para recibir las respuestas de la interface 
const FormSelect = ({
  selectedOption,
  setSelectedOption,
  onSubmit
}: FormSelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Que tan satisfecho estás</Text>
      {/*Se realiza un mapeo de las opciones y se crea el botón (touchableOpacity) */}
      {options.map((option) => (
        <TouchableOpacity 
          //Se usa el valor seleccionado como identificador
          key={option.value}
          style={[
            styles.option,
            selectedOption == option.value && styles.selectedOption,
          ]}
          //Se actualiza la seleccion
          onPress={() => setSelectedOption(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
      ))}

      <Button title="Enviar" onPress={onSubmit}/>
    </View>
  );
};

export default FormSelect;

//Se crean los estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#d0e8ff',
    borderColor: '#3399ff',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
});