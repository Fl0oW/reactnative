import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
	//Firebase init here (before render())
		firebase.initializeApp({
			apiKey: 'AIzaSyB5mSaU55kbZWjgiVRLs5WMauQXNe8IzXY',
			authDomain: 'auth-9beeb.firebaseapp.com',
			databaseURL: 'https://auth-9beeb.firebaseio.com',
			storageBucket: 'auth-9beeb.appspot.com',
			messagingSenderId: '859470519980'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.topBuffer}>
						<CardSection>
							<Spinner size='large' />
						</CardSection>
					</View>
				);
		}		
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	topBuffer: {
		paddingTop: 2
	}
};

export default App;
