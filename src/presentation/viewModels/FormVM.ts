import { useState } from "react"
import { FormResponse } from "../../types/FormResponse";
import { FormService } from "../../services/FormService";

//Se crea la función para el manejo de la información dada a la vista
export const useFormVM = () => {
    //Se almacena el estado de las vistas
    const [ selectedOption, setSelectedOption] = useState<string |null>(null);

    //Se maneja el envio de la respuesta
    const submitResponse = async () => {
        if(!selectedOption){
            throw new Error('No option selected');
        }
        //Como simulacion se guarda un objeto con la fecha y hora de la encuenta resuelta
        const response: FormResponse = {
            response: selectedOption,
            timestamp: new Date().toISOString(),
        };
        //Atravez del servicio guarda la respuesta
        await FormService.saveResponse(response);
        setSelectedOption(null);
    }; 

    return{
        selectedOption,
        setSelectedOption,
        submitResponse
    }
}