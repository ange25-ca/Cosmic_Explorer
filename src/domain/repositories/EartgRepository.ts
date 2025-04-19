/*Constrato que permite complir con la entities */
import { Earth } from "../entities/EarthEntities"; 

//Se crea una interfaz
export interface EarthRepository{
    //Promesa para la api
    //La respuesta se declara como un array
    getEpic(): Promise<Earth[]>
}