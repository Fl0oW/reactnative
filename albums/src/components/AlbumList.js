// This is a class based component (fetching data)
// based on ES6 classes

// Load libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';
//import axios from './node_modules/axios/dist';

// Class based Component
// Has access to "state"
// Lifecycle functions available
// "state" is used for a function to update itself instead of getting updated by parent
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((responseData) => this.setState({ albums: responseData }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}	
}


// Export Component
export default AlbumList;
