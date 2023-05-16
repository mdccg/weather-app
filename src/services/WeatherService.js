import variablesEnvironment from './../config/variablesEnvironment';

class WeatherService {
  constructor() {
    this.baseURL = variablesEnvironment.baseURL;
    this.apiKey = variablesEnvironment.apiKey;
    this.lang = 'pt_br';
  }

  async fetchWeather(latitude, longitude) {
    let data;
    
    await fetch(`${this.baseURL}/weather?lat=${latitude}&lon=${longitude}&lang=${this.lang}&appid=${this.apiKey}`)
      .then(async (response) => {
        data = await response.json();

        const { cod } = data;

        if (cod !== 200 && cod !== 304) {
          console.error(data);
        }
      });

    return data;
  }
}

export default WeatherService;