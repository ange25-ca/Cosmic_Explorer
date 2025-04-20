
import { useEffect, useState } from 'react';
import { MarsClimate } from './../../domain/entities/MarsEntities';
import { MarService } from '../../services/MarsService';
import { getMartUseCase } from '../../domain/usecases/MarsUseCase';

//Se realiza una función para el manejo de la respuesta de la api y el 
//manejo del login 
export const MarsViewModel = () => {
    //Se declara que la api devuelve un aray
    const [data, setData] = useState<MarsClimate[]>([]);
    //El loading se inicializa en verdadero
    const [loading, setLoading] = useState(true);

    //Se inicia el servicio u use case
    const service = new MarService();
    const usecase = new getMartUseCase(service); 

    //Se realiza ek useEffect 
    useEffect(() => {
        //De ser la respuesta correcta atravex del use case 
        usecase.excute() 
        //Se guarda la información
        .then(setData)
        //Si no se manda un error
        .catch(
            error => console.error("La api no se encuentra disponible", error))
        //Finalmente se declara negativo el loading
        .finally(()=> 
            setLoading(false));
    }, []);

    return {data, loading};
};