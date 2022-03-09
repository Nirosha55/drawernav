import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';

const LoginComponent = ({ navigation }) => {
   
  const backClicked = () => {
    console.log('back pressed');
  };

  const loginClicked = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.rootStyle}>
      <View
        style={{flexDirection: 'row', backgroundColor: 'black', height: 50}}>
        <Pressable onPress={backClicked}>
          <Image
            style={{
              width: 20,
              height: 20,
              paddingLeft: 10,
              marginLeft: 20,
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: 'white',
            }}
            source={require('./assets/back-button.png')}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: 'center',
            color: 'white',
            marginLeft: 100,
            padding: 10,
          }}>
          Sign In
        </Text>
      </View>
      <Image style={styles.logo} source={require('./assets/automate.png')} />
      <View style={styles.automateTextStyle}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
            marginTop: 60,
            textAlign: 'center',
          }}>
          Welcome to Automate.
        </Text>
      </View>
      <View style={{padding: 20}}></View>
      <View style={{padding: 15}}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Employee ID"
          editable={true}
          onChangeText={text => setEmpname(text)}
        />
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Password"
          editable={true}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <Text style={styles.text1Style}>Forgot Password?</Text>
      </View>
      <Pressable onPress={loginClicked}>
        <View
          style={{
            height: 50,
            width: 350,
            marginTop: 40,
            justifyContent: 'center',
            backgroundColor: 'black',
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 6,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            LOG IN
          </Text>
        </View>
      </Pressable>

      <View>
        <View
          style={{
            marginLeft: 30,
            marginRight: 20,
            backgroundColor: 'ash',
          }}>
          <View>
            <Text
              style={{
                width: 220,
                height: 30,
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 60,
              }}>
              User’s Profile
            </Text>
          </View>
          <Text
            style={{
              width: 290,
              height: 50,
              color: 'gray',
              fontSize: 12,
            }}>
            Thanks to user’s profile your vehicles, service books and massages
            will be stored safely in a cloud, so you do not have to worry about
            that anymore.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginComponent;

const styles = StyleSheet.create({
  rootStyle: {
    marginTop: 40,
    height: 100,
  },
  logo: {
    width: 400,
    height: 80,
    resizeMode: 'contain',
    marginTop: 60,
  },

  inputTextStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    height: 60,
  },
  text1Style: {
    color: 'grey',
    marginLeft: 240,
  },
  signupButtonStyle: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    margin: 10,
    height: 50,
  },
  imageStyle: {
    height: 160,
    width: 355,
  },
});
