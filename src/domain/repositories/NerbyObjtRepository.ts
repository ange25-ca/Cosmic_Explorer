//Se crea el contrato de la interface 
import { NerbyObjetcAsteroid } from "../entities/NerbyObjEntities";

//Se crea un interface
export interface NerbyObjeRepositoy {
    //Se llama a la api
    getNEOS() : Promise<NerbyObjetcAsteroid[]>
}