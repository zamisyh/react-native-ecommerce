import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CardListCategoryProduct } from '../../components';

const ListCategoryProduct = ({ category }) => {
	return(
		<View style={styles.container}>

			{ category.map((cat) => {
				return(
					<CardListCategoryProduct category={cat} key={cat.id} />
				);
			})}

		</View>
	);
}

export default ListCategoryProduct;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	}
})