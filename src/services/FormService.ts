import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormResponse } from "../types/FormResponse";
import { Storage } from "../data/storage/storagedata";

//Se crea una constante para el asyncstorage
const FORM_STATUS = 'form_status';

export class FormService {
    //Permite guardar la respuesta de forma estatica
    static async saveResponse( response: FormResponse): Promise<void>{
        try {
            /*Se marca el formulario como completado */
            const formStatus = {
                response, 
                completed:true,
            };
            /*Se guarda el estado del formulario */
            await Storage.setItem(FORM_STATUS, JSON.stringify(formStatus));
        } catch (error) {
            console.error('Error del guardado', error);
        }
    }

    /*Permite la verificacion del estado del formulario */
    static async isFormCompleted(): Promise<boolean> {
        try {
            const status = await Storage.getItem(FORM_STATUS);
            if (!status) return false;
            const formStatus = JSON.parse(status);
            /*Verifica si el formulario está completo */
            return formStatus.completed === true;
        } catch(error){
            console.error('Error al verificar el estado del formulario', error);
            return false;
        }
    }


}