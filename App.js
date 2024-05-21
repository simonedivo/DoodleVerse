import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Social from './src/screens/Social';
import Ranking from './src/screens/Ranking';
import Upload from './src/screens/Upload';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen component={Login} name='Login' options={{ headerShown: false}} />
        <Stack.Screen component={Home} name='Home'/>
        <Stack.Screen component={Social} name='Social'/>
        <Stack.Screen component={Ranking} name='Ranking'/>
        <Stack.Screen component={Upload} name='Upload'/>

      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};