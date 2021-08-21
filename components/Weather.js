import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import SplashyLoader from '../assets/SplashyLoader/226-splashy-loader.json';
import WeatherData from './WeatherData';
const Weather = ({ loading, data, error }) => {
  if (!loading && !data) {
    return null;
  }

  return (
    <View style={styles.container}>
      { loading ?<LottieView source={SplashyLoader}  autoPlay loop/> : <WeatherData data={data} /> }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    justifyContent:'center'
  },
  error: {
    color: 'black',
    fontSize: 50,
    textAlign: 'left',
  },
  retry: {
    color: 'black',
    fontSize: 25,
    alignSelf:'center',
  },
  box: {
    padding: 15,
    marginTop:80,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth:1
  },
});

export default Weather;
