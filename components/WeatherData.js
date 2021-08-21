import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import moment from "moment";

const WeatherData = ({ data }) => {
  const celsius = (data.current.temp - 273.15).toFixed(2);
  console.log(data.daily)
  console.log(data.current.dt)
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.render}>
      <Text style={{marginHorizontal:20,fontSize:20}}>{moment.unix(item.dt).format("dddd")}</Text>
        <Text style={{marginHorizontal:20,fontSize:20}}>{(item.temp.day-273.15).toFixed(2)}&#8451;</Text>
      </View>
    </View>
  );
 
  return (
    
    <View style={styles.container} onStartShouldSetResponder={() => true}>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <Text style={styles.title}>Delhi</Text>
        <View style={{position:'absolute',bottom:0,width:'100%',alignSelf:'center'}}>
        <FlatList
                style={styles.open}
                data={data.daily}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
              </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  render: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'white',
    borderBottomColor:'black',
    alignItems:'center',
    height:50,
  },
  open: {
    marginTop: 0,
  },
  box: {
    padding: 15,
    marginTop:20,
    alignItems: 'center',
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 74,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
});

export default WeatherData;
