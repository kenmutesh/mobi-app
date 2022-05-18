import React from 'react';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createNativeStackNavigator();


const RootStackScreen = ({navigation}) => (
    <NavigationContainer>
         <RootStack.Navigator>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}
        options={{
            headerShown: false
          }}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}
        options={{
          headerShown: false
        }}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}options={{
          headerShown: false
        }}/>
    </RootStack.Navigator>
    </NavigationContainer>
   
);

export default RootStackScreen;