import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InfoForm from '../components/InfoForm';
import DatePicker from 'react-native-date-picker';
import Button from '../components/Button';

const InfoScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <InfoForm
          label={`Place`}
          placeholder={`Where do you wanna go ?`}
          type={`dropdonw`}
          keyboardType={`default`}
          editable={true}
        />
        <InfoForm
          label={`Date`}
          placeholder={`When do you wanna go ?`}
          type={`date`}
          keyboardType={`default`}
          editable={false}
        />
        <InfoForm
          label={`Duration`}
          placeholder={`For how many days ?`}
          type={`number`}
          keyboardType={`numeric`}
          editable={true}
        />
        <InfoForm
          label={`Members`}
          placeholder={`How many members ?`}
          type={`number`}
          keyboardType={`numeric`}
          editable={true}
        />
        <InfoForm
          label={`Mode of Travel`}
          placeholder={`How do you wanna go ?`}
          type={`dropdonw`}
          keyboardType={`default`}
          editable={true}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Success')}>
          <Button style={styles.button} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 80,
    alignItems: 'flex-end',
    marginRight: 60,
  },
});
