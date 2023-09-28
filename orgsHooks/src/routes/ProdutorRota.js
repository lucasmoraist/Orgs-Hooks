import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Produtor } from "../screen/Produtor";
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();

export default function ProdutorRota({ ComponentePrincipal = Home }){
    return <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="Produtor" component={Produtor}/>
    </Stack.Navigator>
}