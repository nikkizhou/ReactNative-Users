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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 500,
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
}

export default CustomerDetail
