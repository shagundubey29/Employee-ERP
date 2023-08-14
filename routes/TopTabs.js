import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Education } from '../screens';
import { Experience } from '../screens';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" Education" component={Education} />
      <Tab.Screen name="Experience" component={Experience} />
    </Tab.Navigator>
  )
}

export default TopTabs
