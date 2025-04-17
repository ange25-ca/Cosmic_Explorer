//Se importa la Api Key del .env 
import axios from "axios";

/*Se usa el patron de diseño singleton, creando una instancia
para todas las apis que se usaran*/

//Se crea la clase principal
class Apis {
    //Se crea una instancia privada de la clase
    private static instance: Apis; 
    //Se tipa la Api Key, de igual manera se declara que no se puede modificar la API KEY
    private readonly apiKey: string;

    //se crea el constructor quien controla como se realiza la creacion de la instancia
    private constructor(){
        //Se asigna la variable de entorno a apiKey 
        //en caso de no encontrar la api coloca una cadena vacia 
        this.apiKey = process.env.NASA_API_KEY || '';
        //console.log('API Key cargada desde .env:', this.apiKey);
    }

    /*Se crea la obtención de la instancia (la hace unica) */
    public static getInstance(): Apis {
        /*Si la instancia de la api no existe, se crea */
        if(!Apis.instance){
            Apis.instance = new Apis();
        }
        /*De lo contrario se retorna la existente */
        return Apis.instance;
    }

    //Se crea el primer get para la API: APOD
    public async getApod() {
        try{
            //Se realiza la llamada a la API con axios
            const response = await axios.get('https://api.nasa.gov/planetary/apod', {
                
                //Se pasa el parametro (API KEY)
                params:{
                    api_key: this.apiKey,
                },
            });
            //Se imprime en consola como prueba
            //console.log('Respuesta de la API APOD:', response.data); 
            return response.data;
        } catch (error) {
            //Se imprime en consola como prueba
            console.error('Error en llamar a la API APOD', error);
            throw error;
        }
    }
}

export default Apis;