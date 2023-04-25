import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
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
    <View
      style={[styles.icnoButtonWrapper, hasMarginRight && styles.rightMarigin]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        onPress={onPress}
        android_ripple={{color: '#ededed'}}>
        <Icon name={name} size={24} color={color}></Icon>
      </Pressable>
    </View>
  );
}
//name: 아이콘 이름
//color : 아이콘 색상
// hasMarginRight: 우측 여백 유무
// onPress : 버튼을 눌렀을 때 호출할 함수
