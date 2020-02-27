import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home';
import Browse from './screens/Browse';
import Settings from './screens/Settings';
import HomeDetail from './screens/Home/HomeDetail';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 2,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}

        options={{ title: "GUNESBRO's Cave", }} />
      <HomeStack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          }
        }} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';

            } else if (route.name === 'Browse') {
              iconName = focused ? 'planet' : 'planet';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
            }
            return <Ionicons name={Platform.OS === 'ios'? `ios-${iconName}`:`md-${iconName}`} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontWeight: 'bold'
          },
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}