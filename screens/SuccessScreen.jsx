import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Success from '../components/Success';

const SuccessScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Success />
      </View>
    </>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
});
