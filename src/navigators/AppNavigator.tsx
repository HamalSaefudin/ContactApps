import {DetailContactSCreen, HomeScreen} from '@/modules';
import {RoutesParamList, routesEnum} from '@/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator<RoutesParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routesEnum.HOME} component={HomeScreen} />
      <Stack.Screen
        name={routesEnum.DETAIL_CONTACT}
        component={DetailContactSCreen}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
