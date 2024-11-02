import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Stock from "../pages/stock"
import createProduct from "../pages/product/createProduct"
import editProduct from "../pages/product/editProduct"

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />  
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Stock"
            component={Stock}
          />  
          <Stack.Screen
            name="createProduct"
            component={createProduct}
          />
          <Stack.Screen
            name="editProduct"
            component={editProduct}
          />
        </Stack.Navigator>
    )
}