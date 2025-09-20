
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Test2 from './Test2';




export default function Test2() {
  const [country_name, setCountryName] = useState ('Philippines');
  const muabroad = () => {
    setCountryName('Sa Gawas');
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <Text>Test2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});