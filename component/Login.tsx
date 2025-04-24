import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ActivityIndicator, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';


// type LoginScreenProps = {
//   navigation:{
//     navigate:(screen:string) => void;
//   }
// }

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setEmail(e.nativeEvent.text);
  };

  const handlePasswordChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setPassword(e.nativeEvent.text);
  };

  const handleLogin = (): void => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Login attempted with:', email);

      console.log('Login attempted with:', email, password);

    }, 1500);
  };


  return (
    <KeyboardAvoidingView style={styles.container} >
      <View style= {styles.innerContainer}>
        <Text style={styles.title}>
          Welcome Back
        </Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            {/* <Icon name='envelope' size = {20} color='#777' style= {styles.icon}/> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Your Email'
              placeholderTextColor='#999'
              value={email}
              onChange={handleEmailChange}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              />

          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            {/* <Icon name='lock' size={20} color='#777' style= {styles.icon} /> */}
            <TextInput
              style={styles.input}
              placeholder='Enter Your Password'
              placeholderTextColor='#999'
              value={password}
              onChange={handlePasswordChange}
              secureTextEntry={!showPassword}
              autoCapitalize='none'
            />
            <TouchableOpacity
              onPress={()=>setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              {/* <Icon 
                name={showPassword ?  'eye-slash' : 'eye'} 
                size={20}
                color="#777"
              /> */}
            </TouchableOpacity>

          </View>
        </View>
        <TouchableOpacity style= { styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading? (<ActivityIndicator color='white'/>):(<Text style={styles.loginButtonText}>Sign In</Text>)}

        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {/*navigation.navigate('SignUp')*/}}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

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
    textAlign:'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 10,
    color: '#666',
    marginBottom: 40,
    textAlign:'center',

  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    width:150
  },
  forgotPasswordText: {
    color: '#1e88e5',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1e88e5',
    padding:16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#1e88e5',
    fontWeight: 'bold',
  },
});



export default Login