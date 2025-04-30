import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormResponse } from "../types/FormResponse";

//Se crea una constante para el asyncstorage
const SURVEY_STORAGE_KEY = 'form_responses';

export class FormService {
    //Permite guardar la respuesta de forma estatica
    static async saveResponse( response: FormResponse): Promise<void>{
        try {
            //Obtiene las respuestas
            const existing = await AsyncStorage.getItem(SURVEY_STORAGE_KEY);
            //En caso de que haya crea un array
            const responses: FormResponse[] = existing ? JSON.parse(existing) : [];
            //Agrega la respuesta al array
            responses.push(response);
            //Guarda el estado en el array
            await AsyncStorage.setItem(SURVEY_STORAGE_KEY, JSON.stringify(responses));

        } catch (error) {
            console.error('Error del guardado', error);
        }
    }
}