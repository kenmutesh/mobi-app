import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './scr/components/MainTabScreen';
import { DrawerContent } from './scr/components/DrawerContent';
import { ActivityIndicator, DarkTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './scr/screens/SplashScreen';
import RootStackScreen from './scr/screens/RootStackScreen';
import { View } from 'react-native';
import { AuthContext } from './scr/components/AuthContext';

const Drawer = createDrawerNavigator();

// const [isEnabled, setIsEnabled] = React.useState(false);


export default function App() {


  const[isLoading, setIsLoading] = React.useState(true);
  const[userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() =>({
    signIn: () =>{
      setUserToken('kennedy')
      setIsLoading(false)
    },
    signOut: () =>{
      setUserToken(null)
      setIsLoading(false)
    },
    signUp: () =>{
      setUserToken('kennedy')
      setIsLoading(false)
    }

  }))

  useEffect(() => {
   setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


  if(isLoading){
    return(
      <View style={{flex: 1,justifyContent: 'center',alignContent: 'center'}}>
      <ActivityIndicator size='small' />
    </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider>
        <NavigationContainer>
        { userToken == null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen 
         options={{
          headerShown: false
        }}
        name='HomeTab' component={MainTabScreen} />
      
       {/* <Drawer.Screen name="Products" component={Products} />  */}
     </Drawer.Navigator>
        )
        :
      <RootStackScreen />
      }
    </NavigationContainer> 
    </PaperProvider> 
    </AuthContext.Provider>
  );
}

