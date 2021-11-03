import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fonts, colors, responsiveWidth } from '../../utils';
import Button from '../Child/Button';

const CardListProduct = ({product}) => {
	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.card}>
				<Image source={product.image[0]} style={styles.images} />
				<Text style={styles.title}>{product.name}</Text>
			</TouchableOpacity>

			<Button type="text" title="Detail" />
		</View>
	)
}

export default CardListProduct;

const styles = StyleSheet.create({
	container:{
		marginBottom: 20
	},
	card: {
		marginTop: 10,
		backgroundColor: colors.dark,
		width: responsiveWidth(150),
		alignItems: 'center',
		padding: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		marginBottom: 10,
	},
	images: {
		width: 124,
		height: 124,
		marginTop: -10,
		padding: 0,
	},
	title:{
		marginTop: 5,
		fontSize: 13,
		color: 'black',
		fontFamily: fonts.secondary.regular,
		textTransform: 'capitalize',
		textAlign: 'center'
	},
})