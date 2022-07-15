import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value) {
          // alert(value);
          //let user = JSON.parse(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onPressLogin = () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value) {
          setErrorMsg('');
          let user = JSON.parse(value);
          var details = user.find(
            obj => obj.UName == userName && obj.PWord == passWord,
          );
          if (details) {
            clearValues();
            navigation.navigate('Home');
          } else {
            setErrorMsg('Pleasse Enter The Valid UserName or Password!');
          }
        } else {
          setErrorMsg('Pleasse Enter The UserName And Password!');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onPressRegister = () => {
    clearValues();
    navigation.navigate('Register');
  };

  const onPressFP = () => {
    clearValues();
    navigation.navigate('Home');
  };

  const clearValues = () => {
    setErrorMsg('');
    setUserName('');
    setPassWord('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
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
      <TouchableOpacity onPress={onPressFP}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRegister}>
        <Text style={styles.SignupText}>Signup</Text>
      </TouchableOpacity>
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
});

export default LoginScreen;
