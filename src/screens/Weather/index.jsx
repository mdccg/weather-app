import { View, Text } from 'react-native';
import styles from './styles';

const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HEADER</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>BODY</Text>
      </View>
    </View>
  );
}

export default Weather;