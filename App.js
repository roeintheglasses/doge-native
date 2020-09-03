import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/drawerComponents';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from "react-native";
import Homescreen from './components/homescreen/homescreen'
import Dogeify from './components/dogify/dogify'
import Bobify from './components/bobify/bobify'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="#101010" barStyle='light-content' />
      <NavigationContainer >
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#101010',
          width: '70%',
        }} initialRouteName="Homescreen" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Homescreen" component={Homescreen} />
          <Drawer.Screen name="Dogeify" component={Dogeify} />
          <Drawer.Screen name="Bobify" component={Bobify} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


