import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InfoForm = ({label, placeholder, type, keyboardType, editable}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const dateInputRef = useRef(null);

  const handleDateChange = () => {
    setOpen(true);
  };

  const handleSetDate = selectedDate => {
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString();
      setTextInputValue(formattedDate);
    }
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        type={type}
        ref={type === 'date' ? dateInputRef : null}
        keyboardType={keyboardType}
        editable={editable}
        style={styles.textContainer}
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
      {type === 'date' && (
        <>
          <AntDesign
            name="calendar"
            size={24}
            color="black"
            style={styles.icon}
            onPress={handleDateChange}
          />
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={handleSetDate}
            onCancel={() => setOpen(false)}
          />
        </>
      )}
    </View>
  );
};

export default InfoForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 22,
  },
  label: {
    fontSize: 21,
    marginTop: 10,
    marginBottom: 3,
    fontFamily: 'Poppins-SemiBold',
  },
  textContainer: {
    marginTop: 3,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 15,
    backgroundColor: 'white',
    fontSize: 21,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    position: 'absolute',
    top: 65,
    left: 320,
  },
});
