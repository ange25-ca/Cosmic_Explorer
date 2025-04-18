/* Permite la conección ente la entidad y repository */

import Apis from "../data/datasources/AppApis";
import { Apod } from "../domain/entities/AstronomyEntities";
import { ApodRepository } from "../domain/repositories/AstronmyRepository";

//Se crea una clase con implementación del contrato
export class ApodService implements ApodRepository {
    //permite seguir a al singleton con la unica instancia
    private api = Apis.getInstance();

    //Se realiza una promesa
    async getApod(): Promise<Apod>{
        //De vuelve un objento que tiene las entidades de APOD 
        const data = await this.api.getApod();
        //Retorna los valores indicados
        return {
            title: data.title,
            explanation: data.explanation,
            url: data.url,
            media_type: data.media_type,
        };
    }
}
