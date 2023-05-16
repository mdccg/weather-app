import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7b733',
    flex: 1,
  },
  
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    marginTop: 100,
  },

  body: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 2,

    paddingLeft: 25,
    marginBottom: 50,
  },

  headerText: {
    fontSize: 50,
    color: 'white',
  },
  
  bodyText: {
    fontSize: 25,
    color: 'white',
  },
});

export default styles;