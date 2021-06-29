/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { colors } from '../constants/tokens';
import TrainingList from '../screens/TrainingList';
import Training from '../screens/Training';
import Diet from '../screens/Diet';
import Profile from '../screens/Profile';
import UserInfos from '../screens/UserInfos';
import AboutApp from '../screens/AboutApp';
import UseTerms from '../screens/UseTerms';

export type BottomTabParamList = {
  TrainingList: undefined;
  Diet: undefined;
  Profile: undefined;
};

export type StackParamList = {
  Home: undefined;
  Training: undefined;
  UserInfos: undefined;
  AboutApp: undefined;
  UseTerms: undefined;
};

// tabBarOptions={{
//   activeTintColor: cores.roxo,
//   inactiveTintColor: cores.claro,
//   activeBackgroundColor: cores.roxo,
//   inactiveBackgroundColor: cores.laranja,
//   style: {
//     height: 70,
//   },
//   labelStyle: {
//     width: '100%',
//     flex: 1,
//     fontWeight: 'bold',
//     fontSize: 16,
//     lineHeight: 21,
//     marginTop: 3,
//     paddingTop: 21,
//     backgroundColor: cores.laranja,
//   },
// }}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TrainingList"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="TrainingList"
        component={TrainingList}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="barbell-outline" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Diet"
        component={Diet}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-apple-outline" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Training" component={Training} />
      <Stack.Screen name="UserInfos" component={UserInfos} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="UseTerms" component={UseTerms} />
    </Stack.Navigator>
  );
};
