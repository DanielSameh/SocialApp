import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Social App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8AB4F8',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
