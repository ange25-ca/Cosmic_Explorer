
import { useState , useEffect} from 'react';
import { NerbyObjetcAsteroid } from './../../domain/entities/NerbyObjEntities';
import { NerbyObjService } from '../../services/NerbyObjService';
import { getNerbyObjecUse } from '../../domain/usecases/NerbyObjetcUse';


export const useNerbyObjtVM = () => {
    //Se declara los estados de la view 
    const [data, setData] = useState<NerbyObjetcAsteroid[]>([]);
    const [loading, setLoading] = useState(true); 

    //Se crean las constantes para los servicios 
    const service = new NerbyObjService();
    const usecase = new getNerbyObjecUse(service);

    //Se crea el useEffect para la api
    useEffect(() => {
        //En caso de que la api responda, actualiza los datos 
        usecase.execute().then(asteroids => {
          setData(asteroids);
          //Desactiva el setLoading
          setLoading(false);
        }).catch((error) => {
          //En caso de que falle mostrara un error pero igual desaciva el loading
          setLoading(false);
          console.error("No se puedo obtener datos de la Api Astronomi Day", error);
          throw error;
        });
      }, []);

      return {data, loading};
}