// @flow

import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {};

export default function Button({  }: Props): React.Element<*> {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    justifyContent: 'center',
    height: 40,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
