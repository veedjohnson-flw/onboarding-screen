import React, {type PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import OnboardingScreen from './screens/OnboardingScreen';
import PartTwo from './screens/PartTwo';

export type StackParamsList = {
  Onboarding: undefined;
  SignUp: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();

const App = () => {
    return (
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen 
                name="Onboarding"
                component={OnboardingScreen}
              />
              <Stack.Screen 
                name="SignUp"
                component={PartTwo}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
