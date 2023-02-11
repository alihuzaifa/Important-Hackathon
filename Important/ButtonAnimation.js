import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MotiView, useAnimationState} from 'moti';

const ButtonAnimation = () => {
  const [clicked, setClicked] = useState(true);
  const animationState = useAnimationState({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
    active: {
      scale: 1.1,
      opacity: 1,
    },
    noactive: {
      scale: 0.5,
      opacity: 0.5,
    },
  });

  const onPress = () => {
    if (clicked) {
      setClicked(false);
      animationState.transitionTo('active');
    } else {
      animationState.transitionTo('noactive');
      setClicked(true);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}>
        <MotiView
          state={animationState}
          style={{width: 100, height: 100, backgroundColor: '#fff'}}></MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAnimation;

const styles = StyleSheet.create({});
