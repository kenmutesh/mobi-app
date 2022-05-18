import { Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ministries from './Ministries';
import Icon from 'react-native-vector-icons/Ionicons'

const ChatStack = createNativeStackNavigator();
const ChatScreen = ({navigation})=>{
 
    return (
      <View>
        <Text>Chat screen</Text>
      </View>
      
    )
  }

  export default ChatScreen;