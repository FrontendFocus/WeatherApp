import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard,Text,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './store/actions/weatherActions';
import Weather from './components/Weather';
import Geolocation from '@react-native-community/geolocation';
const App = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      const lati = info.coords.latitude;
      const long = info.coords.longitude;
      console.log(info);
      loadWeather(lati,long)
     });
  };
  useEffect(() => {
 getCurrentLocation()
  }, []);
 const loadWeather=(lati,long)=> {
    setLoading(true);
    dispatch(getWeather(lati,long, () => setLoading(false), () => setLoading(false)));
    setSearch('');
    Keyboard.dismiss();
  }
  if (error) {
    console.log(error)
    return <View style={styles.container}>
      <Text style={styles.error}>Something went Wrong at our End</Text>
      <TouchableOpacity  style={styles.box} onPress={() => getCurrentLocation()}><Text style={styles.retry}>Retry</Text></TouchableOpacity>
    </View>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container1}>
        <Weather loading={loading} data={data} error={error} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
    paddingHorizontal:40,
    justifyContent:'center'
  },
  container1: {
    flex: 1,
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

export default App;
