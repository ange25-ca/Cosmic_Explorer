import Apis from "../data/datasources/AppApis";
import { Earth } from "../domain/entities/EarthEntities";
import { EarthRepository } from "../domain/repositories/EartgRepository";


//Se crea una clase para el servicio implementando el repositorio
export class EarthEpicService implements EarthRepository {
    //Se llama a la clase de mi api
    private api = Apis.getInstance();

    async getEpic(): Promise<Earth[]>{
        //Se transforma el resultado obtenido por el que se necesita
        const data = await this.api.getEpic(); 
        //Como la api necesit la contrucción de una fecha se mapea
        return data.map((item:any) => {
            //Se extrae la fecha sin la hora
            const date = item.date.split(' ')[0].replaceAll('-', '/');
            //Se contruye la urls
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/${item.image}.png`;
        //Se retorna la informacion para el screen
        return {
            caption: item.caption,
            image: imageUrl,
            date: item.date
            }
         });
    } 
}