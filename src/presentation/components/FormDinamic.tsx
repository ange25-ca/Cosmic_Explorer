import { TouchableOpacity, View, Text, Button , StyleSheet, Platform} from "react-native";
import { FormOption } from "../../data/models/FormField";
import { useThemeColors } from "../hook/themeColors";
import { Controller, Control } from "react-hook-form";


//Se realiza la definicion de la interfaz
interface FormSelectProps {
  //Control del formulario
  control: Control<any>;
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
const FormSelect = ({ control, onSubmit }: FormSelectProps) => {

  //Se evalua si esta en web
  const isWeb = Platform.OS === 'web';
  //Se crea la constante para el cambio de color del texto
  const colors = useThemeColors();
  //Se crea una constante para aplicar el diseño conforme a la plataforma
  const layoutStyle = isWeb ? webStyles : androidStyles;
  return (
    <View style={layoutStyle.container}>
      <Text style={[layoutStyle.title, { color: colors.text }]}>¿Que tan satisfecho estás?</Text>
      {/*Se realiza un mapeo de las opciones y se crea el botón (touchableOpacity) */}
      <Controller
        control={control}
        name="selectedOption"
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <>
          <View style={layoutStyle.optionsContainer}>
            {options.map((option) => (
              <TouchableOpacity
                //Se usa el valor seleccionado como identificador
                key={option.value}
                style={[
                  layoutStyle.option,
                  value === option.value && layoutStyle.selectOption,
                ]}
                //Se actualiza la seleccion
                onPress={() => onChange(option.value)}
              >
                <Text 
                  style={[layoutStyle.optionText, { 
                    color: colors.text, 
                    borderColor: colors.buttonborder }]}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </>
        )}
      />
      <TouchableOpacity 
        onPress={onSubmit} 
        style={[ layoutStyle.button ,{
           backgroundColor: colors.background, 
           borderColor: colors.buttonColor }]}>
        <Text style={[ { color: colors.text }]}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormSelect;

//Se crean los estilos 
const webStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 60
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
  },
  //Botones de opciones
  option: {
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignSelf:'center'
  },
  selectOption: {
    borderColor: '#e6f7ff',
    backgroundColor: '#a48fe8',
  },
  optionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',      
    justifyContent: 'center',
    gap: 10,               
    marginBottom: 20,
  },
  
});

const androidStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 25
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  selectOption: {
    backgroundColor: '#553ea5',
    borderColor: '##7F00FF',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'column',  
    flexWrap: 'nowrap',      
    justifyContent: 'center',
    gap: 15,              
    marginBottom: 20,
  },
  
});
