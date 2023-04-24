import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 'row',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default function WriteHeader() {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <Pressable
          style={styles.iconButton}
          onPress={onGoBack}
          android_ripple={{color: '#ededed'}}>
          <Icon name="arrow-back" size={24} color={'#424242'}></Icon>
        </Pressable>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          <Pressable
            style={[styles.iconButton]}
            android_ripple={{color: '#ededed'}}>
            <Icon name="delete-forever" size={24} color={'#ef5350'}></Icon>
          </Pressable>
        </View>
        <View style={styles.iconButtonWrapper}>
          <Pressable
            style={styles.iconButton}
            android_ripple={{color: '#ededed'}}>
            <Icon name="check" size={24} color={'#009688'}></Icon>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
