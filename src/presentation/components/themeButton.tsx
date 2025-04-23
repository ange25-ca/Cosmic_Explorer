import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Button } from "react-native";
import { toggleTheme } from "../../store/slices/theme/themeSlice";

//Se crea la funcion para el botón que permitira el cambio de color
export default function ThemeButton() {
  //Se crea la constate para el dispatch
  const dispatch = useDispatch();
  //Se usa el selector para el cambio de color y se establece el nuevo color
  const theme = useSelector((state: RootState) => state.theme.mode);

 return (
    <Button
      title={theme === 'light' ? '🌙' : '☀️'}
      onPress={() => dispatch(toggleTheme())}
      color={theme === 'light' ? '#000' : '#fff'}
    />
  );
} 