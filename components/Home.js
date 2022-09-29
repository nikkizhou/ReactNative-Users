import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';
import Customer from './Customer';
import customers from '../customers';
import { auth } from '../firebase';

export default function Home({navigation}) {
  const [user, setUser] = useState();
  auth.onAuthStateChanged((authUser) => setUser(authUser));

  const signOutUser = () => {
    auth.signOut()
      .then(() => { navigation.replace('Login') })
      .catch((err) => alert(err.message));
  };
  
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Customer List</Text>
      <Text>Account: {user?.email}</Text>
      <Button
        title="Log out"
        onPress={() => signOutUser()}
        style={styles.logout}
      />
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
  },
  logout: {
    backgroundColor: '#ff5c5c',
    textColor:'black',
    marginTop: 10,
    textAlign: 'center',
    padding: 7,
    margin: 7
  },
});
