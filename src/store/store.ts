//Store de redux
import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/theme/themeSlice';

//Se configuración redux
export const store = configureStore({
  reducer: {
    //Se almacena el slice en redux
    theme: themeSlice,
  },
});

// Se tipan los estados para que pueda ser usuados con typescript
//Permite conocer el estado gobal
export type RootState = ReturnType<typeof store.getState>;
//Permite realizar las acciones 
export type AppDispatch = typeof store.dispatch;
