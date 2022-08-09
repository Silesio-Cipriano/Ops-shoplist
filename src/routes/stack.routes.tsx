import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { CreateList } from "../screens/CreateList";
import { Categories } from "../screens/Categories";
import { ListItems } from "../screens/ListItems";
import { CreateItem } from "../screens/CreateItem";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="Onboarding"
    >
      <Screen
        name="Onboarding"
        component={Onboarding}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CreateList"
        component={CreateList}
      />
      <Screen
        name="Categories"
        component={Categories}
      />
      <Screen
        name="ListItems"
        component={ListItems}
      />
      <Screen
        name="CreateItem"
        component={CreateItem}
      />

    </Navigator>
  )
}