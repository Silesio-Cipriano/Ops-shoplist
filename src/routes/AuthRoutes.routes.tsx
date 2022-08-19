import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { CreateList } from "../screens/CreateList";
import { Categories } from "../screens/Categories";
import { ListItems } from "../screens/ListItems";
import { EditList } from "../screens/EditList";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
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
        name="Register"
        component={Register}
      />
    </Navigator>
  )
}