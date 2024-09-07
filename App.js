import { StatusBar } from 'expo-status-bar';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Social from './src/screens/Social';
import Ranking from './src/screens/Ranking';
import Upload from './src/screens/Upload';
import { styles } from './src/css/styles';

const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarActiveTintColor: 'purple', tabBarActiveTintColor: 'gray'}}>
      <Tab.Screen component={Home} name='Home' options={{tabBarIcon: ({ focused }) => (<Image source={require('./icons/palette.png')} style={[styles.icon, {tintColor: focused ? 'purple':'gray'}]}/>)}}/>
      <Tab.Screen component={Social} name='Social' options={{tabBarIcon: ({ focused }) => (<Image source={require('./icons/canvas.png')} style={[styles.icon, {tintColor: focused ? 'purple':'gray'}]}/>)}}/>
      <Tab.Screen component={Ranking} name='Ranking' options={{tabBarIcon: ({ focused }) => (<Image source={require('./icons/star.png')} style={[styles.icon, {tintColor: focused ? 'purple':'gray'}]}/>)}}/>
      <Tab.Screen component={Upload} name='Upload' options={{tabBarIcon: ({ focused }) => (<Image source={require('./icons/cloud.png')} style={[styles.icon, {tintColor: focused ? 'purple':'gray'}]}/>)}}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

        <Stack.Screen component={Login} name='Login'/>
        <Stack.Screen component={TabNavigator} name='TabNavigator' />

      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};