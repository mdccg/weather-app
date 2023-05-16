import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import WeatherScreen from './src/screens/Weather';
import WeatherService from './src/services/WeatherService';

const weatherService = new WeatherService();

class App extends Component {
  state = {
    isLoading: true,
    temperatureInCelsius: 0,
    weatherCondition: null,
  };

  async getWeather(latitude, longitude) {
    const weatherData = await weatherService.fetchWeather(latitude, longitude);
    console.log(weatherData);
  }
  
  render() {
    this.getWeather(-20.4749, -55.107);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <WeatherScreen />
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