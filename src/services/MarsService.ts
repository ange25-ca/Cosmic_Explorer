//Se crea el servicio el cual mapeara los datos para el viewModel
import Apis from '../data/datasources/AppApis';
import { MarsClimate } from '../domain/entities/MarsEntities';
import { MarsRepository } from './../domain/repositories/MarsRepository';

//Se crea una clase implementando el repositorio
export class MarService implements MarsRepository {
    //Se llama a la api 
    private api = Apis.getInstance();
    //Se tiene como promesa el llamado de la api
    async getInsight(): Promise<MarsClimate[]> {
        //Se guarda la informacion
        const Data = await this.api.getInsight();
        //se retorna en un objeto
        return Object.entries(Data)
        //Se filtra los valores que no tengan fecha(ya que la api devuelve valores en 0)
        .filter(([Key, data]: any) => data.First_UTC)
        //Se mapea los datos a usar   
        .map(([key, data]: any) => ({
            //Se usa el operador  ? con el fin de que si llegase a faltar 
            //un valor no muestre un error
            date: data.First_UTC,
            temperatura: data.AT?.av ?? 0,
            temperaturaMin: data.AT?.mn ?? 0,
            temperaturaMax: data.AT?.mx ?? 0,
            viento: data.HWS?.av ?? 0,
        }))
        //Finalmente no muestra los datos donde todos sean 0
        .filter(item =>
            item.date &&                         
            item.temperatura !== 0 &&           
            item.temperaturaMin !== 0 &&
            item.temperaturaMax !== 0
        );
    }
}