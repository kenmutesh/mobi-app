import { Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Updates from './Updates'

const ProfileScreen = ({navigation})=>{
 
    return (
      <View>
        <Text>Profile</Text>
        <Button title='Go to products'></Button>

        <Button title='Go to carts'
        onPress={()=> navigation.navigate(Updates)}></Button>

        <Button title='Go to products'></Button>
      </View>
    )
  }

  export default ProfileScreen;