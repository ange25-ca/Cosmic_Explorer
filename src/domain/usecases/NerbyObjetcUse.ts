//Caso de uso 

import { NerbyObjeRepositoy } from "../repositories/NerbyObjtRepository";
import { NerbyObjetcAsteroid } from './../entities/NerbyObjEntities';

export class getNerbyObjecUse {
    //Se crea el constructor
    constructor(private repo: NerbyObjeRepositoy){}
        //Se ejecuta la promesa cuando la respuesta sea valida
           execute(): Promise<NerbyObjetcAsteroid[]>{
               return this.repo.getNEOS();
       }
}