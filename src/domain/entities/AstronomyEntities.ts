//Se crea la interfaz de la API APOD 
export interface Apod {
    //La imgen tendra: 
    title: string,
    explanation: string,
    url: string;
    media_type: 'image' | 'video';
}