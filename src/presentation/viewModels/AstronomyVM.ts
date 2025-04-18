//Permite el llamado de la API
import { useEffect, useState } from "react"
import { Apod } from "../../domain/entities/AstronomyEntities";
import { ApodService } from "../../services/AstronomyServices";
import { GetApodUseCase } from "../../domain/usecases/AstronomyUse";

//Se crea la función para ViewModel
export const useAstronomyViewModel = () => {
    //Se declara los estados de la view
    const [data, setData] = useState<Apod | null>(null);
    const [loading, setLoading] = useState(true);

    //Se crea la cosntante para el service
    const service = new ApodService();
    //Se crea la constante para el useCase
    const useCase = new GetApodUseCase(service);

    //Se crea el useEffect para iniciar el llamado de la api
    useEffect(() => {
        //En caso de que la api responda, actualiza los datos 
        useCase.execute().then(apod => {
          setData(apod);
          //Desactiva el setLoading
          setLoading(false);
        }).catch((error) => {
          //En caso de que falle mostrara un error pero igual desaciva el loading
          setLoading(false);
          console.error("No se puedo obtener datos de la Api Astronomi Day", error);
          throw error;
        });
      }, []);
    
      //Como en ocasiones la API puede regresar videos se crea unas constantes
      const isImage = data?.media_type === 'image';
      const isVideo = data?.media_type === 'video';

      return { data, loading, isImage, isVideo };
}