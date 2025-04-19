
import { useEffect, useState } from 'react';
import { Earth } from '../../domain/entities/EarthEntities';
import { EarthEpicService } from '../../services/EarthServicies';
import { GetEpicUseCase } from '../../domain/usecases/EarthUseCase';


export const useEarthViewModel = () => {
    //se declara las varibles de la función 
    const [data, setData] = useState<Earth[]>([]);
    const [loading, setLoading] = useState(true);
    
    const service = new EarthEpicService();
    const usecase = new GetEpicUseCase(service); 

    //Se crea el useEffect para iniciar el llamado de la api
    useEffect(() => {
        //Como es una promesa, se usa el usecase
        usecase.execute()
        //De ser correcta, se guarda los datos
        .then(setData)
        //Si no es asi se manda un error
        .catch(error => console.error('Error al obtner las imagenes', error))
        //Cuando finaliza se pone en falso el loading
        .finally(() => setLoading(false));
    }, []);

    return {data, loading};
}