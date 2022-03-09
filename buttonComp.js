import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ButtonComponent = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{color}</Text>
      <Button
        title={`increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />

      <Button
        title={`decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
