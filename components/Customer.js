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
    backgroundColor: 'rgba(224, 203, 232, 0.721)',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'rgba(123, 87, 137, 0.721)',
    padding: 7,
    margin: 7
  },
  btnText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white'
  },
});

export default Customer
