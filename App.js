import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';

import Facebook from './screen/facebook';
import Instagram from './screen/instagram';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  facebook:{screen:Facebook},
  instagram:{screen:Instagram},
});
const AppContainer = createAppContainer(TabNavigator);