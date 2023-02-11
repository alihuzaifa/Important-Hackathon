import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

/*
1. we install teh react-native-svg package because react native qr code generator library also use it on the backend to make beautiful qr codes

2. we install react-native-qrcode-svg for generating qr code only
3.you cannot leave empty value in the msg for qr code value
4. you can also give qr code  color backgroundcolor size property
*/

const QrCode = () => {
  const [msg, setMsg] = useState('Type Something');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="type any message"
        value={msg}
        onChangeText={e => {
          if (e === '') {
            setMsg('Type Something');
          } else {
            setMsg(e);
          }
        }}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white'}}>Generate Qr Code</Text>
      </TouchableOpacity>
      <View style={styles.qrCodeBox}>
        <QRCode value={msg} />
      </View>
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '90%',
    height: 50,
    marginTop: 50,
    borderRadius: 20,
    alignSelf: 'center',
    paddingLeft: 30,
    borderWidth: 0.5,
  },
  btn: {
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  qrCodeBox: {
    marginTop: 50,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
