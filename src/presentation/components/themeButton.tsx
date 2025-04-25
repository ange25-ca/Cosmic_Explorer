import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TouchableOpacity , Text, StyleSheet} from "react-native";
import { toggleTheme } from "../../store/slices/theme/themeSlice";

//Boton para cambiar de modo

//Se crea la función para el botón
export default function ThemeButton() {
  //se usa el dispach para activar mod
  const dispatch = useDispatch();
  //Utiliza el useSelector (redux)
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    //Se utiliza touchOpacity (mejor personalización del boton)
    <TouchableOpacity
    //Se llama al toogleTheme  (encargado de los temas)
      onPress={() => dispatch(toggleTheme())}
      style={[
        styles.button,
        { backgroundColor: theme === 'light' ? '#fff' : '#333' },
      ]}
    >
      <Text style={{ fontSize: 18 }}>{theme === 'light' ? '🌙' : '☀️'}</Text>
    </TouchableOpacity>
  );
}

//Stylos para el botton
const styles = StyleSheet.create({
  button: {
    marginRight: 15,
    padding: 8,
    borderRadius: 20,
  },
});

