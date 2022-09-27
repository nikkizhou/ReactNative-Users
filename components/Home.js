import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Customer from './Customer';
import customers from '../customers';
import { createStackNavigator } from '@react-navigation/stack';


export default function Home({navigation}) {
  const [customersInfo, setCustomersInfo] = useState();
  console.log(customers, 'cc');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Customer List</Text>
      <FlatList
        data={customers}
        renderItem={({ item }) => <Customer customer={item} navigation={navigation}></Customer>}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32
  }
});
