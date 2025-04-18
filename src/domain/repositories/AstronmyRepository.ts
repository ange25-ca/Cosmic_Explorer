/** Se crea un contrato en el cual se debe entregar 
 * lo que pide la interfas de Astronomi (entitites) */
import { Apod } from "../entities/AstronomyEntities";

export interface ApodRepository{
    //Promesa para el resultado de la api
    getApod(): Promise<Apod>;
}