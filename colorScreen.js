import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ButtonComponent from './buttonComp';

const Color_incremnet = 15;

const ColorScreen = () => {
  const [Red, setRed] = useState(0);
  const [Blue, setBlue] = useState(0);
  const [Green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'Red':
        Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
        return;
      case 'Green':
        Green + change > 255 || Green + change < 0
          ? null
          : setGreen(Green + change);
        return;
      case 'Blue':
        Blue + change > 255 || Blue + change < 0
          ? null
          : setBlue(Blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <ButtonComponent
        color="Red"
        onIncrease={() => setColor('Red', Color_incremnet)}
        onDecrease={() => setColor('Red', -1 * Color_incremnet)}
      />
      <ButtonComponent
        color="Blue"
        onIncrease={() => setColor('Blue', Color_incremnet)}
        onDecrease={() => setColor('Blue', -1 * Color_incremnet)}
      />
      <ButtonComponent
        color="Green"
        onIncrease={() => setColor('Green', Color_incremnet)}
        onDecrease={() => setColor('Green', -1 * Color_incremnet)}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${Red}, ${Blue}, ${Green})`,
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});