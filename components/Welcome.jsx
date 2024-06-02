import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt('black', 10)}>Discover Your</Text>
      <Text style={styles.welcomeTxt('#2A4D50', 0)}>Next Adventure</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeTxt: (color, marginTop) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 37,
    color: color,
    marginTop: marginTop,
    marginHorizontal: 12,
  }),
});
