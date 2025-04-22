import { useEffect, useState } from "react";
import { MarsPhoto } from "../../domain/entities/MarsREntities";
import { MarsRService } from "../../services/MarsRRservice";
import { getMarsRuse } from "../../domain/usecases/MarsRuseCase";


//Se crea la función para ViewModel
export const useMarsRViewModel = () => {
    //Se declara los estados de la view
    const [data, setData] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState(true);

    //Se crea la cosntante para el service
    const service = new MarsRService();
    //Se crea la constante para el useCase
    const useCase = new getMarsRuse(service);

    //Se crea el useEffect para iniciar el llamado de la api
    useEffect(() => {
        //En caso de que la api responda, actualiza los datos 
        useCase.execute().then(MarsPhoto => {
          setData(MarsPhoto);
          //Desactiva el setLoading
          setLoading(false);
        }).catch((error) => {
          //En caso de que falle mostrara un error pero igual desactiva el loading
          setLoading(false);
          console.error("No se puedo obtener datos de la Api Mars R", error);
          throw error;
        });
      }, []);

      return { data, loading };
}