/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var C1 = require('react-native-cordova-plugin');
//var C2 = require('rncp');
var z3 = React.createClass({
  render: function() {
    debugger;
    //cordova.device.getInfo(console.log.bin(console.log), console.log.bind(console));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Integrated</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('z3', () => z3);
