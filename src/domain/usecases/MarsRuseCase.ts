//Se crea la relacion entre la entidad y repositorio

import { MarsPhoto } from "../entities/MarsREntities";
import { MarsRReposity } from "../repositories/MarsRRepository";


//Se crea la clas
export class getMarsRuse{
    //Se crea el contructor privado
    constructor ( private repo: MarsRReposity){}
        //en caso de la respuesta sea correcta se retorna un 
        async execute(): Promise<MarsPhoto[]>{
            return this.repo.getMars();
        }
}