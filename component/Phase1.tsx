// Phase1.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Phase1Props } from '../types';

const Phase1: React.FC<Phase1Props> = ({ navigation }) => {
  const [contact, setContact] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [verificationSent, setVerificationSent] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>('');

  const handleSubmit = (): void => {
    if (!verificationSent) {
      setVerificationSent(true);
    } else {
      if (verificationCode === '123456') {
        navigation.navigate('Phase2', { contact, isEmail });
      } else {
        Alert.alert('Invalid verification code');
      }
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Step 1: Contact Information</Text>
        
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isEmail && styles.activeToggle]}
            onPress={() => setIsEmail(true)}
          >
            <Text style={[styles.toggleText, isEmail && styles.activeToggleText]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isEmail && styles.activeToggle]}
            onPress={() => setIsEmail(false)}
          >
            <Text style={[styles.toggleText, !isEmail && styles.activeToggleText]}>Phone </Text>
          </TouchableOpacity>
        </View>

        {!verificationSent ? (
          <>
            <TextInput
              style={styles.input}
              value={contact}
              onChangeText={setContact}
              placeholder={isEmail ? "Enter your email" : "Enter your phone number"}
              keyboardType={isEmail ? "email-address" : "phone-pad"}
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Send Verification Code</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.verificationText}>Verification code sent to {contact}</Text>
            <TextInput
              style={styles.input}
              value={verificationCode}
              onChangeText={setVerificationCode}
              placeholder="Enter verification code"
              keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Verify & Continue</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    innerContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
    },
    toggleContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    toggleButton: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
    },
    activeToggle: {
      backgroundColor: '#4a90e2',
    },
    toggleText: {
      color: '#666',
    },
    activeToggleText: {
      color: 'white',
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
    button: {
      backgroundColor: '#4a90e2',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    verificationText: {
      textAlign: 'center',
      marginBottom: 15,
      color: '#666',
    },
  });


export default Phase1;