import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MotiView, useAnimationState, useDynamicAnimation} from 'moti';

const RealButtonAnimation = () => {
  const [clicked, setClicked] = useState(true);
  const animation = useDynamicAnimation(() => {
    return {
      width: 200,
      height: 60,
      borderRadius: 30,
    };
  });

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
          //   onPress();
          if (clicked) {
            animation.animateTo({width: 200, height: 60, borderRadius: 30});
            setClicked(false);
          } else {
            animation.animateTo({width: 60, height: 60, borderRadius: 30});
            setClicked(true);
          }
        }}>
        <MotiView
          state={animation}
          transition={{type: 'spring', duration: 200}}
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!clicked ? (
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: '800',
              }}>
              Login
            </Text>
          ) : null}
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default RealButtonAnimation;

const styles = StyleSheet.create({});
