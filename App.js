/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './src/navigation';
import {SafeAreaView} from 'react-native';

function App(){
  return (
    <SafeAreaView style={{flex:1}}>
      <AppContainer />
    </SafeAreaView>
  )
};

export default App;
