import { Earth } from "../entities/EarthEntities";
import { EarthRepository } from "../repositories/EartgRepository";
/*Se crea una clase que permita interactuar con la entidad
 y el repositorio*/
export class GetEpicUseCase{
    //Se crea un constructor con un repositoru privado usando 
    //como parametro
    constructor(private repo: EarthRepository) {}
    //Ejecuta una promesa cuando se quiera data, el Eart se declara 
    //como array
    async execute(): Promise<Earth[]> {
    //Llama un a getEpic y retorna el resultado
    return this.repo.getEpic();
  }
}