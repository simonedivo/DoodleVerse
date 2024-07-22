import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Social from './src/screens/Social';
import Ranking from './src/screens/Ranking';
import Upload from './src/screens/Upload';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home' activeColor='purple'>
      <Tab.Screen component={Home} name='Home' options={{headerShown: false}}/>
      <Tab.Screen component={Social} name='Social' options={{headerShown: false}}/>
      <Tab.Screen component={Ranking} name='Ranking' options={{headerShown: false}}/>
      <Tab.Screen component={Upload} name='Upload' options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen component={Login} name='Login' options={{ headerShown: false}} />
        <Stack.Screen component={TabNavigator} name='Home' options={{ headerShown: false}} />

      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};