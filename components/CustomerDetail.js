import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

const CustomerDetail = ({ route, navigation }) => {
  const customer  = route.params;
  
  return(
    <View style = {styles.container}>
      <Text>{customer?.name.title} {customer?.name.first} {customer?.name.last} - {customer?.gender} </Text>
      <Text>{customer?.phone} </Text>
      <Text>{customer?.email}</Text>
      <Text>Address: {customer.location.street.name} {customer.location.street.number}, {customer.location.state}, {customer.location.city}</Text>
      <Image source={{ uri: customer.picture.large }} style={{ width: 150, height: 150 }} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}
      ><Text style={styles.btnText}>Back To Home Page</Text></TouchableOpacity>
    </View>
  )
}

const styles = {
  container: {
    alignItems: 'center'
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
}

export default CustomerDetail
