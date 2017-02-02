// This is a functional based component (displaying jsx)

// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// A view is the "outline" of a text
// Flexbox is a positioning tech for views
// Passing props allows for re-configuring components on the fly

// Make a component
// Props are for parent->child communication
const Header = (props) => {
	// destructuring assignment eq to const textStyle = styles.textStyle
	const { textStyle, viewStyle } = styles;

	return ( 
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 5,
		// Shadows don't work on Android
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.2,
		elevation: 4,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make a component available to other parts of the app
/* 	A default property is the property to which a value is assigned if 
	an object is declared within another object's definition without 
	declaring it as a value for a particular property */
export default Header;
