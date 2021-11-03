import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ic from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from '../../../utils';


const TextOnly = ({padding, title}) => {
	return(
		<TouchableOpacity style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

export default TextOnly;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		padding: 10,
		borderRadius: 5,
	},
	title: {
		color: 'black',
		textAlign: 'center',
		fontSize: 13,
		fontWeight: 'bold',
		fontFamily: fonts.secondary.regular
	}
});