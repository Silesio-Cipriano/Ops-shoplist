import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './AuthRoutes.routes';
import { AppRoutes } from './AppRoutes.routes';
import { useAuth } from '../hooks/auth';
export function Routes() {

  const { user, signIn } = useAuth();
  signIn();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}