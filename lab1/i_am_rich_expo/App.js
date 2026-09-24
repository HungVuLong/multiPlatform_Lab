import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={require('./assets/diamond.png')}
          style={styles.diamond}
        />
        <Text style={styles.title}>I Am Rich</Text>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamond: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 24,
    fontSize: 36,
    fontWeight: '700',
    color: '#000',
  },
});