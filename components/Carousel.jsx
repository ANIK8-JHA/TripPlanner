import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Carousel = () => {
  const slides = [
    require('../assets/images/NiagraFalls.webp'),
    require('../assets/images/Hawaii.jpg'),
    require('../assets/images/Hotel.webp'),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor="green"
        inactiveDotColor="black"
        ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 15}}
        autoplay={true}
        circleLoop={true}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
