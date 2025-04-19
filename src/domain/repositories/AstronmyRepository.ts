/** Se crea un contrato en el cual se debe entregar 
 * lo que pide la interface de Astronomy (entitites) */
import { Apod } from "../entities/AstronomyEntities";

export interface ApodRepository{
    //Promesa para el resultado de la api
    getApod(): Promise<Apod>;
}