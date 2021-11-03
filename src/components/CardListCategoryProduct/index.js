import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { responsiveWidth, responsiveHeight, colors } from '../../utils';

const CardListCategoryProduct = ({category}) => {
	return(
		<TouchableOpacity style={styles.container}>
			<Image source={category.image} style={styles.image}  />
		</TouchableOpacity>
	);
}

export default CardListCategoryProduct;

const styles = StyleSheet.create({
	container:{
		backgroundColor: colors.white,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,

		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 15,
		padding: 10
	},
	image: {
		width: responsiveWidth(50),
		height: responsiveHeight(50)
	}
});