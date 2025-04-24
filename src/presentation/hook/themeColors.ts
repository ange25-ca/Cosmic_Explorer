import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { darkTheme, lightTheme } from '../../store/slices/theme/themeColors';

//Se crea el hook para el color de personalizado
export const useThemeColors = () => {
  /*Atravez del selector se puede acceder al tema de redux */
  const mode = useSelector((state: RootState) => state.theme.mode);
  /*Se retorna el color correspondiente al tema */
  return mode === 'dark' ? darkTheme : lightTheme;
};
