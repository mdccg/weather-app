import { Text, View } from 'react-native';
import LoadingPanel from '../../components/LoadingPanel';
import styles from './styles';

const Weather = ({ isLoading, temperatureInCelsius = 0, weatherCondition, cityName }) => {
  return (
    <View style={styles.container}>
      {isLoading ? <LoadingPanel /> : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerText}>{temperatureInCelsius.toLocaleString()} &#8451;</Text>
            <Text style={styles.headerText}>{weatherCondition}</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.bodyText}>{cityName}</Text>
          </View>
        </>
      )}
    </View>
  );
}

export default Weather;