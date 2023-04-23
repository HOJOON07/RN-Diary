import React from 'react';
import {StyleSheet, View} from 'react-native';
import {create} from 'react-test-renderer';

const style = StyleSheet.create({
  block: {},
});

export default function WriteScreen() {
  return <View style={style.block}></View>;
}
