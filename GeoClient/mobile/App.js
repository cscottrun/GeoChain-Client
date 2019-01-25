import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styleSheet';
import Scanner from './components/Scanner'
import ScanOptions from './components/ScanOptions'


export default class App extends React.Component {
  render() {
    return (
        < Scanner />
    );
  }
}
