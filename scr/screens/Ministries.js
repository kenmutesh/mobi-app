import { Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Updates from './Updates'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './Homescreen';
import ProfileScreen from './ProfileScreen';


const Tab = createMaterialTopTabNavigator();
const Ministries = ({navigation})=>{
 
    return (
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
    )
  }

  export default Ministries;