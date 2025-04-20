//Se crea el contrato para el cumplimiento de la entidad

import { MarsClimate } from "../entities/MarsEntities";

//Se crea la interface 
export interface MarsRepository{
    //Se llama a la api (se declara que devuelve un array)
    getInsight(): Promise<MarsClimate[]>
}