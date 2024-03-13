import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NetworkRest from '../../modules/network/adpters/screens/NetworkRest'
import { createStackNavigator } from '@react-navigation/stack'
const Stack= createStackNavigator();

export default function NetworkStack() {
  return (
   <Stack.Navigator>
    <Stack.Screen
     name="NetworkStack"
     component={NetworkStack}
     options={{ title: 'Restaurantes' }}
    />

   </Stack.Navigator>
  )
}

