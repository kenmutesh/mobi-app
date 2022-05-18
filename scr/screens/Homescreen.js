import { Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Updates from './Updates'


const HomeScreen = ({navigation})=>{
 
    return (
      <View>
        <Text>Homescreen 1</Text>
        <Button title='Go to Updates page'
        onPress={()=> navigation.navigate(Updates)} />
</View>
    )
  }

  export default HomeScreen;