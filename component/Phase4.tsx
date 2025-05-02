
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { Phase4Props, User } from '../types';

const suggestedUsers: User[] = [
  { id: 1, name: "AI Assistant", avatar: "https://api.multiavatar.com/ai-assistant.png", bio: "Your helpful AI companion" },
  { id: 2, name: "Tech Support", avatar: "https://api.multiavatar.com/tech-support.png", bio: "Get help with technical issues" },
  { id: 3, name: "Travel Guide", avatar: "https://api.multiavatar.com/travel-guide.png", bio: "Ask about destinations and tips" },
  { id: 4, name: "Book Club", avatar: "https://api.multiavatar.com/book-club.png", bio: "Discuss your favorite books" }
];

const Phase4: React.FC<Phase4Props> = ({ navigation, route }) => {
  const { name, avatar } = route.params;

  const handleStartChat = (userId: number): void => {
    Alert.alert(`Starting chat with user ${userId}`);
    // navigation.navigate('Chat', { userId });
  };

  const handleExplore = (): void => {
    Alert.alert('Registration complete!');
    // navigation.navigate('MainApp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, {name}!</Text>
        <Image source={{ uri: avatar }} style={styles.profileAvatar} />
        <Text style={styles.welcomeText}>Your account is ready! Start chatting with these popular users:</Text>
      </View>
      
      <View style={styles.suggestedUsers}>
        {suggestedUsers.map(user => (
          <TouchableOpacity 
            key={user.id}
            style={styles.userCard}
            onPress={() => handleStartChat(user.id)}
          >
            <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userBio}>{user.bio}</Text>
            <View style={styles.chatButton}>
              <Text style={styles.chatButtonText}>Chat with {user.name.split(' ')[0]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity 
        style={styles.exploreButton}
        onPress={handleExplore}
      >
        <Text style={styles.exploreButtonText}>Explore on my own</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    profileAvatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 15,
    },
    welcomeText: {
      textAlign: 'center',
      color: '#666',
      fontSize: 16,
    },
    suggestedUsers: {
      marginBottom: 30,
    },
    userCard: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      alignItems: 'center',
    },
    userAvatar: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginBottom: 10,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    userBio: {
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 14,
    },
    chatButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    chatButtonText: {
      color: 'white',
      fontSize: 14,
    },
    exploreButton: {
      backgroundColor: '#4a90e2',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    exploreButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

export default Phase4;