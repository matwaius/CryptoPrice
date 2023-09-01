/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>OLA</Text>
        <StatusBar
          backgroundColor="#f50d41"
          barStyle="dark-content"
        />
        <CurrentPrice></CurrentPrice>
        <HistoryGraphic></HistoryGraphic>
        <QuotationsList></QuotationsList>
        <QuotationsItems></QuotationsItems>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems:"center",
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
