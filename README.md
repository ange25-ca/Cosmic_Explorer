
# Cosmic Explorer

**Cosmic Explorer** es una aplicación móvil y web desarrollada con **React Native** y **Expo**.  
    Está estructurada utilizando el patrón **MVVM (Model-View-ViewModel)** y los principios de la **Clean Architecture**.  
    Esta aplicación permite explorar datos astronómicos, tales como información del planeta Marte, objetos cercanos a la Tierra, entre otros.

## APIs utilizadas

Para presentar información relevante, se utilizan cinco APIs proporcionadas por la NASA.  
Es importante destacar que se requiere una clave de acceso (**API_KEY**) para evitar restricciones en el número de consultas. 
Las APIs utilizadas son:

1. **APOD (Astronomy Picture of the Day)**
2. **EPIC (Earth Polychromatic Imaging Camera)**
3. **INSIGHT (Mars Weather Service API)**
4. **SSD/NEOS (Solar System Dynamics and Center for Near-Earth Object Studies)**
5. **Mars Rovers Photos**

### ⚠️ Importante
    Para ejecutar correctamente el proyecto, es necesario crear un archivo **.env** en la raíz del proyecto con el siguiente contenido:
    NASA_API_KEY=tu_clave_de_api
    API_BASE_URL=https://api.nasa.gov/

#### Instalación y ejecución

### 1. Clona el repositorio

    git clone https://github.com/ange25-ca/Cosmic_Explorer.git
    cd cosmic_explorer

### 2. Instala las dependencias
    npm install o  yarn install

### 3. Crea tu documento .env 
    NASA_API_KEY=tu_clave_de_api
    API_BASE_URL=https://api.nasa.gov/

### 4. Ejecuta el programa
    npx expo start 
    
### 5. Selecciona la visualización
    Puede ser android o web
