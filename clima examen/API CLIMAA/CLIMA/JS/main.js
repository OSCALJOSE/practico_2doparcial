
const apikey = 'f9991db72ea210caadc8b9ea4a4174d3';

const lat = "40.71427"; // Agrega las coordenadas de latitud y longitud si las necesitas
const lon = "-74.00597";
const city = 'New York';


async function getWeather() {
    // Construye la URL de la API correctamente
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${city}&appid=${apikey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            // Actualiza el contenido del DOM dentro de JavaScript
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('description').textContent = data.weather[0].description;
           document.getElementById('city').textContent = data.name;
        } else {
            console.error('Error en la respuesta de la API');
        }
    } catch (error) {
        console.error('Error al hacer la solicitud a la API:', error);
    }
}

// Llama a la función getWeather() para obtener los datos del clima
getWeather();