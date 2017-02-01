// index.android.js - place code in here for Android!

// Import a library to help create a component
// import is a new part in ES6 (new version of js)
// only by importing can we reach out to other files
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component (a js function that returns some amount of jsx)
// we create 1 component per file usually
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// Render it to the device
// Only root component is registered with AppRegistry
AppRegistry.registerComponent('albums', () => App);
