/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import RootNavigator from "./src/navigation/RootNavigator";

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    StatusBar.setBarStyle("light-content")
  }

  render() {
    return (
      <View style={styles.container}>
        <RootNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
