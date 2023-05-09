import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';
import { Rook, Knight, Bishop, Queen, King, Pawn } from './components/Pieces'
export default function App() {
  
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
