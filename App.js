/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useMemo, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';


import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import combineReducers from './src/redux';
import { PRODUCTS_HEALTH } from './src/objProduct'
import Home from './src/Home';


const App = () => {
  const store = createStore(combineReducers, {}, applyMiddleware(reduxThunk));
  const product = useMemo( () => PRODUCTS_HEALTH.find( i => i.id === 'whey' ) );

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <Home product={product}/>
        </View>    
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});

export default App;
