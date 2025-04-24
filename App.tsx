import React from 'react';
import { Text,SafeAreaView, View } from 'react-native';
import Login from './component/Login';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Login/>
    </View>
  );
};

export default App;