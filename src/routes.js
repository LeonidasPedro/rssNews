
 import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {UserService} from './services';
import Login from './pages/login';
import Home from './pages/home';
import Categorias from './pages/categorias/';
import Perfil from './pages/perfil';
import RssFeed from './pages/rssFeed';
import {Store} from './store';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="home" color={focused ? '#2196F3' : '#808080'} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Categorias"
          component={Categorias}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="newspaper-outline" color={focused ? '#2196F3' : '#808080'} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={RssFeed}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="logo-rss" color={focused ? '#2196F3' : '#808080'} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="person" color={focused ? '#2196F3' : '#808080'} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          Store.getState()[UserService.reducerKey]?.token
            ? 'BottomTabNavigator'
            : 'BottomTabNavigator'
        }>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen
          component={BottomTabNavigator}
          name="BottomTabNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

