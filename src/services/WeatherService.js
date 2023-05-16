import { BASE_URL, API_KEY } from '@env';

class WeatherService {
  constructor() {
    this.baseURL = BASE_URL;
    this.apiKey = API_KEY;
    this.lang = 'pt_br';
  }

  async fetchWeather(latitude, longitude) {
    const response = await fetch(`${this.baseURL}/weather?lat=${latitude}&lon=${longitude}&lang=${this.lang}&appid=${this.apiKey}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
      
    } else {
      throw new Error('Houston, we have a problem.');
    }
  }
}

export default WeatherService;