/*Permite la conección entre la entidad y el repository*/

import Apis from "../data/datasources/AppApis";
import { NerbyObjetcAsteroid } from "../domain/entities/NerbyObjEntities";
import { NerbyObjeRepositoy } from "../domain/repositories/NerbyObjtRepository";

//Se crea una clase con la implementacion del repository
export class NerbyObjService implements NerbyObjeRepositoy {
    //Permite llamar al singleton
    private api = Apis.getInstance();

    //Se realiza una promesa
    async getNEOS(): Promise<NerbyObjetcAsteroid[]> {
        //Se guardan el resultado  
        const data = await this.api.getNEOS();
        //Se retorna los resultados
        return data.near_earth_objects.map (( asteroid: any) => ({
            //Accede a una sección de la api por lo que los datos son en crudos: 
            id: asteroid.id,
            name: asteroid.name,
            magnitude: asteroid.absolute_magnitude_h,
            Hazardous: asteroid.is_potentially_hazardous_asteroid,
            diameterMin: asteroid.estimated_diameter.meters.estimated_diameter_min,
            diameterMax: asteroid.estimated_diameter.meters.estimated_diameter_max,
            url: asteroid.nasa_jpl_url
        }));
    }
}