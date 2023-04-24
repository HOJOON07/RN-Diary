import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  icnoButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightMarigin: {
    marginRight: 8,
  },
});

export default function TransparentCircleButton({
  name,
  color,
  hasMarginRight,
  onPress,
}) {
  return (
    <View>
      <Pressable></Pressable>
    </View>
  );
}
