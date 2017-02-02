// Libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Component
const Button = ({ onPress, children }) => {
	const { textStyle, buttonStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10

	},
	buttonStyle: {
		flex: 1, // expand as much as you can
		alignSelf: 'stretch', // element should position itself, stretching to limits
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}	
};

// Export
export default Button;
