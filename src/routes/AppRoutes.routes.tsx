import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { CreateList } from "../screens/CreateList";
import { Categories } from "../screens/Categories";
import { ListItems } from "../screens/ListItems";
import { CreateItem } from "../screens/CreateItem";
import { EditItem } from "../screens/EditItem";
import { EditList } from "../screens/EditList";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="Home"
    >
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
      <Screen
        name="EditItem"
        component={EditItem}
      />
      <Screen
        name="EditList"
        component={EditList}
      />

    </Navigator>
  )
}

