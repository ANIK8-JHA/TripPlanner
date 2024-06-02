import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Success = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Congratulations!!</Text>
      <Text style={styles.text2}>Your Trip is planned</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30,
    color: 'black',
    marginBottom: 10,
  },
  text2: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30,
    color: 'black',
  },
});
