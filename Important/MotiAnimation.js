import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';

/*
1. first we install the react native moti
2. we install the react native reanimated
3. third we add the plugins at the babel .config.js
plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
4. we reset the cache npm start -- --reset-cache
5.then we import the Component from motiview    
*/
const MotiAnimation = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          scale: 0.1,
        }}
        animate={{scale: 1}}
        transition={{duration: 1500, type: 'timing'}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}></MotiView>
    </View>
  );
};

export default MotiAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
