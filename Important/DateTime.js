import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

/*
1. First we install npm i react-native-modal-datetime-picker @react-native-community/datetimepicker
2. then we import from the library
3. then we add the state
4 then we add three function for each date and time
*/

const DateTime = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    const convertIntoTime = new Date(date).toLocaleTimeString();
    console.log(convertIntoTime);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={showDatePicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={showTimePicker}>
        <Text>Select Time</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '50%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
