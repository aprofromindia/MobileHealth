/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import AppleHealthKit from 'rn-apple-healthkit';
import GoogleFit from 'react-native-google-fit';

export default class App extends React.PureComponent<{}> {
  componentWillMount() {
    const PERMS = AppleHealthKit.Constants.Permissions;
    const options = {
      permissions: {
        read: [PERMS.DateOfBirth],
      },
    };
    this._setupAppleHealth(options);
    this._setupGoogleFit();
  }

  _setupAppleHealth(options: { permissions: { read: [string] } }) {
    if (Platform.OS === 'ios') {
      AppleHealthKit.initHealthKit(options, (err, results) => {
        if (err) {
          console.error('Error initialising Health Kit: ', err);
          return;
        }

        AppleHealthKit.getDateOfBirth(null, (err, results) => {
          if (!err) {
            this.setState({ dob: results.age !== null ? results.age : 'DOB' });
          }
        });
      });
    }
  }

  _setupGoogleFit() {
    if (Platform.OS === 'android' && GoogleFit.isEnabled()) {
    }
  }

  state = {
    dob: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button />
        <Text style={styles.text}>{this.state.dob}</Text>
        <View style={styles.transform} />
        <View style={styles.wave} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
  },
  transform: {
    borderWidth: 2,
    height: 50,
    width: 50,
    margin: 20,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
  },
  wave: {
    bottom: 0,
    height: 100,
    backgroundColor: 'blue',
  },
});
