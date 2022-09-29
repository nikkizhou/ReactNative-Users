import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomerDetail from './components/CustomerDetail';
import Home from './components/Home'
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import SignOutScreen from './components/SignOutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={ { title: 'Login' }}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={CustomerDetail} />
          <Stack.Screen name="Signout" component={SignOutScreen} options={{ title: 'Signout' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

console.reportErrorsAsExceptions = false;
