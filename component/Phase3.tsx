
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Phase3Props } from '../types';

interface AvatarOption {
  id: string;
  uri: string;
}

const avatarOptions: AvatarOption[] = [
  { id: 'male1', uri: 'https://api.multiavatar.com/male1.png' },
  { id: 'female1', uri: 'https://api.multiavatar.com/female1.png' },
  { id: 'robot1', uri: 'https://api.multiavatar.com/robot1.png' },
  { id: 'cat1', uri: 'https://api.multiavatar.com/cat1.png' },
];

const Phase3: React.FC<Phase3Props> = ({ navigation, route }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const handleImageUpload = (): void => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets?.[0]?.uri) {
        setCustomAvatar(response.assets[0].uri);
        setSelectedAvatar(null);
      }
    });
  };

  const handleSubmit = (): void => {
    const avatar = customAvatar || selectedAvatar;
    if (!avatar) {
      Alert.alert('Please select or upload an avatar');
      return;
    }
    navigation.navigate('Phase4', {
      ...route.params,
      avatar
    }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Step 3: Profile Picture</Text>
      
      <Text style={styles.subtitle}>Choose an avatar or upload your photo</Text>
      
      <View style={styles.avatarPreviewContainer}>
        {customAvatar ? (
          <Image source={{ uri: customAvatar }} style={styles.avatarPreview} />
        ) : selectedAvatar ? (
          <Image source={{ uri: selectedAvatar }} style={styles.avatarPreview} />
        ) : (
          <View style={[styles.avatarPreview, styles.avatarPlaceholder]}>
            <Icon name="account-circle" size={100} color="#ddd" />
          </View>
        )}
      </View>
      
      <TouchableOpacity 
        style={styles.uploadButton}
        onPress={handleImageUpload}
      >
        <Icon name="photo-camera" size={20} color="white" />
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>
      
      <Text style={styles.avatarOptionsTitle}>Or select an avatar:</Text>
      
      <View style={styles.avatarOptions}>
        {avatarOptions.map((avatar) => (
          <TouchableOpacity
            key={avatar.id}
            onPress={() => {
              setSelectedAvatar(avatar.uri);
              setCustomAvatar(null);
            }}
          >
            <Image 
              source={{ uri: avatar.uri }} 
              style={[
                styles.avatarOption,
                selectedAvatar === avatar.uri && styles.selectedAvatar
              ]} 
            />
          </TouchableOpacity>
        ))}
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
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      textAlign: 'center',
      color: '#666',
      marginBottom: 30,
    },
    avatarPreviewContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatarPreview: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    avatarPlaceholder: {
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#ddd',
    },
    uploadButton: {
      flexDirection: 'row',
      backgroundColor: '#4a90e2',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
    },
    uploadButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    avatarOptionsTitle: {
      textAlign: 'center',
      marginBottom: 15,
      color: '#666',
    },
    avatarOptions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    avatarOption: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    selectedAvatar: {
      borderColor: '#4a90e2',
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
  
  

export default Phase3;