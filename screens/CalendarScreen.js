import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

const style = StyleSheet.create({
  block: {},
});

export default function CalendarScreen() {
  const {text} = useContext(LogContext);
  return <View style={style.block}></View>;
}

// <Text style={style.text}>text: {text}</Text>
