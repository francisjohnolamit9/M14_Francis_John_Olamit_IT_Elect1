import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorChangerApp from './ColorChangerApp';
import CounterApp1 from './CounterApp1';

export default function App() {
  return (
    <View style={styles.container}>
      <ColorChangerApp />
      <CounterApp1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});