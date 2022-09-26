import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from "../screens/Onboarding";
import { LanguageInit } from "../screens/LanguageInit";
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
      <Screen
        name="LanguageInit"
        component={LanguageInit}
      />
    </Navigator>
  )
}