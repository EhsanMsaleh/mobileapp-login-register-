import React from "react";
import {  NativeBaseProvider } from "native-base";
import ShowProducts from "./src/components/showProducts/showProducts";
import Login from './src/components/login/login'
import Signup from './src/components/signUp/signUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ShowProducts} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>  */}

      <NativeBaseProvider>
        {/* <Signup/> */}
        <Login/> 
        {/* <ShowProducts /> */}
      </NativeBaseProvider>
    </>
  );
}
