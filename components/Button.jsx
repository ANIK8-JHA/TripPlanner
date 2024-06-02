import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Button = ({navigation}) => {
  return (
    <View>
      <Text style={styles.responseLink}>Next</Text>
      <Entypo
        name="arrow-right"
        size={32}
        color={`blue`}
        style={styles.arrow}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  responseLink: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 32,
    color: 'blue',
  },
  arrow: {
    position: 'absolute',
    top: 10,
    left: 90,
  },
});
