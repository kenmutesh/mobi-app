import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/Homescreen'
import Ministries from '../screens/Ministries'
import ProfileScreen from '../screens/ProfileScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from '../screens/ChatScreen';
import Updates from '../screens/Updates';


const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const MinistriesStack = createNativeStackNavigator();
const ChatScreenStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Updates"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ministries"
        component={MinistriesStackScreen}
        options={{
          tabBarLabel: 'Ministries',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Updates" component={Updates} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ProfileStack.Navigator>
    );

const MinistriesStackScreen = ({navigation}) => (
  <MinistriesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <MinistriesStack.Screen name="Ministries" component={Ministries} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </MinistriesStack.Navigator>
  );

const ChatStackScreen = ({navigation}) => (
  <ChatScreenStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ChatScreenStack.Screen name="Chat" component={ChatScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ChatScreenStack.Navigator>
  );