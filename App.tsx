// App.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/login';
import SignUpScreen from './src/screens/signUp';
import DashBoard from './src/screens/dashBoard';
import { authStore } from './src/store/authStore';
import { RootStackParamList } from './src/config/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = observer(() => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authStore.user ? (
          <Stack.Screen name="Dashboard" component={DashBoard} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
