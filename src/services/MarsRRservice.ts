import Apis from "../data/datasources/AppApis";
import { MarsPhoto } from "../domain/entities/MarsREntities";
import { MarsRReposity } from "../domain/repositories/MarsRRepository";


export class MarsRService implements MarsRReposity {
    //Se llama a la clase de la api
    private api = Apis.getInstance();

    async getMars(): Promise<MarsPhoto[]>{
            //se obtiene los datos en crudo
            const data = await this.api.getMarsR();
            //Se accede a la las imagenes
            const photos = data.photos; 

            return photos.map((item:any) => {
            return {
                id: item.id,
                img_src: item.img_src,
                }
             });
        }
  }