//Se crea la interaccion entre la entidad y repositorio 

import { MarsClimate } from "../entities/MarsEntities";
import { MarsRepository } from "../repositories/MarsRepository";

//Se crea una clase para el uso de caso
export class getMartUseCase{
    //Se crea un constructor privado
    constructor(private repo: MarsRepository){}
    //Se utiliza la inyeccion de dependencias atravez de repo

    //Si se tiene una respuesta existosa se ejecuta una promesa
    async excute(): Promise<MarsClimate[]> {
        //Se guarda la respuesta y se retorna
        return this.repo.getInsight();
    }
}