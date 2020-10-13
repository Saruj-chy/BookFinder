import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
  const [signedIn, setSignedIn] = useState({
    IsignedIn: false,
    name: '',
    password: '',
  })

  const handleSubmit = () => {
    setSignedIn({ ...signedIn, IsignedIn: true })

    if (signedIn.name == "") {
      Alert.alert('Enter the Name');
    }
    else if (signedIn.password == "") {
      Alert.alert('Enter the Password');
    }

    console.log(signedIn);

  }

  return (
    <View >
      <Text style={{ color: 'orange', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 50 }}>Login Screen</Text>

      <TextInput name="name" style={styles.textStyle} placeholder="Enter your Name" onChangeText={(name) => setSignedIn({ ...signedIn, name: name })} />
      <TextInput name="password" style={styles.textStyle} placeholder="Enter your Password" onChangeText={(password) => setSignedIn({ ...signedIn, password: password })} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({


  textStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 30,
    color: 'black'
  }

})

export default Login;