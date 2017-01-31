// index.android.js - place code in here for Android!

// Import a library to help create a component
// import is a new part in ES6 (new version of js)
// only by importing can we reach out to other files
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component (a js function that returns some amount of jsx)
const App = () => {

//this is jsx
  return(<Text>Some Text</Text>);
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
