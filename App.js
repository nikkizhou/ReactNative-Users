import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomerDetail from './components/CustomerDetail';
import Home from './components/Home'
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={CustomerDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
