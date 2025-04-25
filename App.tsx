import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import LocalChatRoom from './component/Chatroom';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ChatRoom" 
          component={LocalChatRoom}
          options={{ title: 'Chat Room' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;