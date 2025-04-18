/*Funciona como un lider debido a que maneja como 
se obtendra y manejara los datos */

import { ApodRepository } from "../repositories/AstronmyRepository";
import { Apod } from "../entities/AstronomyEntities";

//Se crea una clase 
export class GetApodUseCase{
    /*Contiene un constructor el cual permite que 
    si el repositorio (contrato) es valido se execute una promesa*/
    constructor(private repo: ApodRepository){}
        execute(): Promise<Apod>{
            return this.repo.getApod();
    }
}