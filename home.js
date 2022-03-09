import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Image
} from 'react-native';

const Home = ({ navigation }) => {

 const btnClicked = () => {
   navigation.navigate('HomePage');
 };

  return (
    <SafeAreaView style={styles.rootStyle}>
    
      <Text style={styles.text1}>Sign in Details:</Text>
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
      </View>
      <Pressable onPress={btnClicked}>
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
            SIGN IN
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootStyle: {
    marginTop: 40,
    height: 100,
  },

  inputTextStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 6,
    padding: 10,
    height: 60,
  },
  text1: {
    flexDirection: 'column',
    marginLeft: 100,
  },
});
