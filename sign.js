// import React from 'react'
// import {
//   View,
//   Button,
//   TextInput,
//   StyleSheet
// } from 'react-native'
// const Sign = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         autoCapitalize="none"
//         placeholderTextColor="white"

//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         autoCapitalize="none"
//         placeholderTextColor="white"

//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         autoCapitalize="none"
//         placeholderTextColor="white"

//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         autoCapitalize="none"
//         placeholderTextColor="white"

//       />
//       <Button title="Sign Up" />
//     </View>
//   );
// };
// export default Sign();
//   const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: '#42A5F5',
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,

} from 'react-native';

const HomePage = () => {

  return (
    <SafeAreaView style={styles.rootStyle}>
      <Text style={styles.text1}>Sign in Details:</Text>
      <View style={{padding: 20}}></View>
      <View style={{padding: 15}}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Employee ID"
          editable={true}
         
        />
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Password"
          editable={true}
          secureTextEntry={true}
        
        />
      </View>

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
    </SafeAreaView>
  );
};

export default HomePage;

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
