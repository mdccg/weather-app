const fakeWeatherData = {
  base: 'stations',
  clouds: { all: 0 },
  cod: 200,
  coord: { lat: -20.4749, lon: -55.7863 },
  dt: 1684211693,
  id: 3471896,
  main: {
    feels_like: 287.71,
    grnd_level: 999,
    humidity: 81,
    pressure: 1017,
    sea_level: 1017,
    temp: 288.05,
    temp_max: 288.05,
    temp_min: 288.05,
  },
  name: 'Aquidauana',
  sys: { country: 'BR', sunrise: 1684231529, sunset: 1684271624 },
  timezone: -14400,
  visibility: 10000,
  weather: [{ description: 'céu limpo', icon: '01n', id: 800, main: 'Clear' }],
  wind: { deg: 114, gust: 4.59, speed: 2.2 },
};

export default fakeWeatherData;
