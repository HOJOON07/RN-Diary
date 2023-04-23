import React, {useContext} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default function FeedScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton></FloatingWriteButton>
    </View>
  );
}

// const {text, setText} = useContext(LogContext);
// <TextInput
// value={text}
// onChangeText={setText}
// placeholder="텍스트를 입력하세요"
// style={styles.input}
// />
