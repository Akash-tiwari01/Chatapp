// Phase2.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, ScrollView, Alert } from 'react-native';
import { Phase2Props } from '../types';

const Phase2: React.FC<Phase2Props> = ({ navigation, route }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = <T extends keyof typeof userDetails>(
    name: T,
    value: typeof userDetails[T]
  ): void => {
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (): void => {
    if (!userDetails.agreeTerms) {
      Alert.alert('You must agree to the terms');
      return;
    }
    navigation.navigate('Phase3', {
      ...route.params,
      ...userDetails
    });
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Step 2: Basic Information</Text>
      
      <TextInput
        style={styles.input}
        value={userDetails.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder="Full Name"
        autoCapitalize="words"
      />
      
      <TextInput
        style={styles.input}
        value={userDetails.age}
        onChangeText={(text) => handleChange('age', text)}
        placeholder="Age"
        keyboardType="number-pad"
      />
      
      <TextInput
        style={styles.input}
        value={userDetails.password}
        onChangeText={(text) => handleChange('password', text)}
        placeholder="Password"
        secureTextEntry
      />
      
      <View style={styles.termsContainer}>
        <Switch
          value={userDetails.agreeTerms}
          onValueChange={(value) => handleChange('agreeTerms', value)}
          trackColor={{ false: "#767577", true: "#4a90e2" }}
        />
        <Text style={styles.termsText}>I agree to the Terms of Service and Privacy Policy</Text>
      </View>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity 
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: 16,
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    termsText: {
      marginLeft: 10,
      flex: 1,
      color: '#666',
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#4a90e2',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
    },
    backButton: {
      backgroundColor: '#ddd',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

export default Phase2;