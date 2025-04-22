import { MarsPhoto } from "../entities/MarsREntities";

//Se crea el contrato 
export interface MarsRReposity{
    //se llama a la api 
    getMars(): Promise<MarsPhoto[]>
}