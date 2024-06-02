import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import Welcome from '../components/Welcome';
import Carousel from '../components/Carousel';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{felx: 1}}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color={`black`} />
          <Text style={styles.location}>Milton, Ontario</Text>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color={`black`} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />

        <View style={styles.innerContainer}>
          <Text style={styles.question1}>Are You</Text>
          <Text style={styles.question2}>Planning for a vacation ?</Text>
          <View style={styles.response}>
            <Text style={styles.responseText}>If Yes,</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Text style={styles.responseLink}>Click Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: 12,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 1,
  },
  cartNumber: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
  },
  innerContainer: {
    marginTop: 30,
    marginHorizontal: 18,
    backgroundColor: '#ddf0ed',
    height: 300,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
  },
  question1: {
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 27,
    color: 'black',
  },
  question2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 27,
    marginBottom: 5,
    color: 'black',
  },
  response: {
    flexDirection: 'row',
    marginTop: 20,
  },
  responseText: {
    marginRight: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#2A4D50',
  },
  responseLink: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 32,
    color: 'gray',
  },
});

export default HomeScreen;
