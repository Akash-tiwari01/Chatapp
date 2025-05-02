import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import LocalChatRoom from './component/Chatroom';
import Phase1 from './component/Phase1';
import Phase2 from './component/Phase2';
import Phase3 from './component/Phase3';
import Phase4 from './component/Phase4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Phase1" component={Phase1} options={{ headerShown: false }} />
        <Stack.Screen name="Phase2" component={Phase2} options={{ headerShown: false }} />
        <Stack.Screen name="Phase3" component={Phase3} options={{ headerShown: false }} />
        <Stack.Screen name="Phase4" component={Phase4} options={{ headerShown: false }} />
        <Stack.Screen name="ChatRoom" component={LocalChatRoom}options={{ title: 'Chat Room' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;