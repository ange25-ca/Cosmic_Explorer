
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Se crea la interfaz para el estado
interface ThemeState {
  mode: 'light' | 'dark';
}

//Se tieme por defecto al estado obscuro
const initialState: ThemeState = {
  mode: 'dark',
};

//Se crea el slice que usara redux
const themeSlice = createSlice({
  name: 'theme',
  //Se llamada al estado inicial antes declarado
  initialState,
  //Se realiza el cambio entre el tema claro u obscuro
  reducers: {
    //Se evalua cual es el estado de la pagina
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    //Se actualiza el modo en el cual se selecciono
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      //se actualiza
      state.mode = action.payload;
    },
  },
});

//Se exportan los elementos necesarios para el cambio de mod
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
