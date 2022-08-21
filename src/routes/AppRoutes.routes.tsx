import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { CreateList } from "../screens/CreateList";
import { Categories } from "../screens/Categories";
import { ListItems } from "../screens/ListItems";
import { EditList } from "../screens/EditList";
import { Settings } from "../screens/Settings";
import { Register } from "../screens/Register";
import { Perfil } from "../screens/Perfil";
import { Themes } from "../screens/Themes";
import { Language } from "../screens/Language";

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
        name="EditList"
        component={EditList}
      />
      <Screen
        name="Settings"
        component={Settings}
      />
      <Screen
        name="Perfil"
        component={Perfil}
      />
      <Screen
        name="Themes"
        component={Themes}
      />
      <Screen
        name="Language"
        component={Language}
      />

    </Navigator>
  )
}

