import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutorRota from "./ProdutorRota";
import MelhoresProdRotas from "./MelhoresProdRotas";

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={ProdutorRota}/>
      <Tab.Screen name='Melhores Produtores' component={MelhoresProdRotas}/>
    </Tab.Navigator>
  </NavigationContainer>
}