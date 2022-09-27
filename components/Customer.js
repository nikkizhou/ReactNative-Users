import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


function Customer({ customer, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{customer.name.first} {customer.name.last}</Text>
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('Detail', customer)}
      ><Text style={styles.btnText}>Detail</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 5,
    margin: 5
  },
  btnText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'blue'
  },
});

export default Customer
