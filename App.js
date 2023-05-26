import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import WeatherScreen from './src/screens/Weather';
import WeatherService from './src/services/WeatherService';
import fakeWeatherData from './src/mock/fakeWeatherData';

const weatherService = new WeatherService();

class App extends Component {
  state = {
    isLoading: true,
    temperatureInCelsius: 0,
    weatherCondition: null,
    cityName: ''
  };

  async getWeather(latitude, longitude) {
    // const weatherData = await weatherService.fetchWeather(latitude, longitude);
    const weatherData = fakeWeatherData;
    
    const { 
      main: { temp },
      name,
      weather: [{ description }]
    } = weatherData;

    const newState = {
      isLoading: false,
      temperatureInCelsius: temp - 273.15,
      weatherCondition: description,
      cityName: name,
    };

    this.setState(newState);
  }

  componentDidMount() {
    this.getWeather(-20.4749, -55.7863);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <WeatherScreen {...this.state} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default App;