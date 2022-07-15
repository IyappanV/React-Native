import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const createAccount = async () => {
    if (firstName.length == 0) {
      setErrorMsg('Pleasse Enter The First Name!');
    } else if (lastName.length == 0) {
      setErrorMsg('Pleasse Enter The Last Name!');
    } else if (userName.length == 0) {
      setErrorMsg('Pleasse Enter The User Name!');
    } else if (passWord.length == 0) {
      setErrorMsg('Pleasse Enter The Password!');
    } else {
      clearValues();
      var userStore = [
        {
          FName: firstName,
          LName: lastName,
          UName: userName,
          PWord: passWord,
        },
      ];
      try {
        if (userStore.length != 0) {
          userStore.push({
            FName: firstName,
            LName: lastName,
            UName: userName,
            PWord: passWord,
          });
        }

        await AsyncStorage.setItem('userData', JSON.stringify(userStore));
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onPressNavLogin = () => {
    clearValues();
    navigation.navigate('Login');
  };

  const clearValues = () => {
    setErrorMsg('');
    setFirstName('');
    setLastName('');
    setUserName('');
    setPassWord('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={[styles.inputView, {marginBottom: 20}]}>
        <TextInput
          style={styles.inputText}
          value={firstName}
          placeholder="First Name"
          placeholderTextColor="black"
          onChangeText={text => setFirstName(text)}
        />
      </View>
      <View style={[styles.inputView, {marginBottom: 20}]}>
        <TextInput
          style={styles.inputText}
          value={lastName}
          placeholder="Last Name"
          placeholderTextColor="black"
          onChangeText={text => setLastName(text)}
        />
      </View>
      <View style={[styles.inputView, {marginBottom: 20}]}>
        <TextInput
          style={styles.inputText}
          keyboardType="email-address"
          value={userName}
          placeholder="User Name"
          placeholderTextColor="black"
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={[styles.inputView, {marginBottom: 10}]}>
        <TextInput
          secureTextEntry
          keyboardType="numbers-and-punctuation"
          maxLength={15}
          style={styles.inputText}
          value={passWord}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={text => setPassWord(text)}
        />
      </View>
      <View>
        <Text style={{color: 'red', marginBottom: 15}}>{errorMsg}</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={createAccount}>
        <Text style={styles.SignupText}>Create Account</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.SignupText}>Already have an account? </Text>
        <TouchableOpacity onPress={onPressNavLogin}>
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#d1d1d1',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'white',
    fontSize: 15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SignupText: {
    color: 'white',
    fontSize: 15,
  },
  LoginText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fb5b5a',
    marginLeft: 60,
    marginTop: 10,
  },
  loginBackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default RegisterScreen;
