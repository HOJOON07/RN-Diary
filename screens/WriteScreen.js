import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {create} from 'react-test-renderer';
import WriteHeader from '../components/WriteHeader';

const style = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default function WriteScreen() {
  return (
    <SafeAreaView style={style.block}>
      <WriteHeader></WriteHeader>
    </SafeAreaView>
  );
}
