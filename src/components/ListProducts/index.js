import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardListProduct } from '../../components';

const ListProducts = ({products}) => {
	return(
		<View style={styles.container}>
			{products.map(( product ) => {
				return(
					<CardListProduct key={product.id} product={product} />
				);
			})}
	 	</View>
	);
}

export default ListProducts;

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	}

})