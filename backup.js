import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { customers } from './customers';
import { useState } from 'react';
import Customer from './components/Customer';

export default function App() {
  const [customers, setCustomers] = useState(customers);
  console.log(customers);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers}
        renderItem={({ customer }) => <Customer customer={customer}></Customer>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
