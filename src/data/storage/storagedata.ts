import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";


/*Se crea la constante para el almacenaminto del formulario */
const STORAGE_KEY = 'form_responses';

/* Se crea la clase para determinar el tipo de almacenamiento 
conforme a la plataforma*/
export class Storage{
    /*Se crea una clase estatica que almacena por medio de una clave (key:string) */
    static async getItem(key:string): Promise<string | null>{
        /*Se evalua si es web */
        if (Platform.OS === 'web') {
            /*Para web se usara localStorage, si bien para ello se utilizan 
            promesas */
            return Promise.resolve(localStorage.getItem(key));
        } else {
            /*En caso de que no sea web se usala AsyncStorage (Es compatible con android) */
            return AsyncStorage.getItem(key);
        }
    }

    /*Se crea otra clase estatica */
    static async setItem(key:string, value:string):Promise<void>{
        //Se evalua si es web
        if (Platform.OS === 'web'){
            /*De serlo se almacena en localStorage */
            localStorage.setItem(key, value);
        } else {
            /*Se guarda la clave en android */
            await AsyncStorage.setItem(key, value);
        }
    }

    /*Se crea la clase estetica para la eliminacion de la clave */
    static async removeItem(key:string): Promise<void>{
        if (Platform.OS === 'web'){
            /*Se remueve la clave si es web */
            localStorage.removeItem(key);
        }else {
            /*Se remueve la clave para android */
            await AsyncStorage.removeItem(key);
        }
    }
}


