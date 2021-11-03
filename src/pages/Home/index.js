import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { 
	IconHome, IconHomeActive, IconProduct, 
	IconProductActive, IconProfile, IconProfileActive 
} from '../../assets'

import { Header, BannerSlider, ListCategoryProduct, ListProducts } from '../../components';
import { colors, fonts } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { dummyCategoryProduct, dummyListProduct } from '../../data';




export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			category: dummyCategoryProduct,
			products: dummyListProduct,
		}
	}

	render(){

		const { category, products } = this.state
 
		return(
			 <View style={styles.page}>
			 	<ScrollView showsVerticalScrollIndicator={false}>
			 		<Header />
				 	<BannerSlider />
				 	<View style={styles.listCategoryProduct}>
				 		<Text style={styles.labelCategoryProduct}>
				 			Category Product
				 		</Text>
				 		<ListCategoryProduct category={category} />
				 	</View>

				 	<View style={styles.listProduct}>
				 		<Text style={styles.labelProduct}>
				 			Pilih <Text style={{ fontWeight: 'bold' }}>Product</Text> Yang Anda Inginkan
				 		</Text>
				 		<ListProducts products={products}/>
				 	</View>

				 	<TouchableOpacity style={styles.viewAll}>
				 		<Text style={styles.viewAllTxt}>Lihat Semua</Text>
				 	</TouchableOpacity>

			 	</ScrollView>
			 </View>
		);
	}
}


const styles = StyleSheet.create({
	page:{
		backgroundColor: colors.white
	},
	listCategoryProduct: {
		marginHorizontal: 30,
		marginTop: 10
	},
	labelCategoryProduct: {
		color: '#000000',
		fontSize: 18,
		fontFamily: fonts.secondary.regular
	},
	listProduct: {
		marginHorizontal: 30,
		marginTop: 10
	},
	labelProduct: {
		color: '#000000',
		fontSize: 18,
		fontFamily: fonts.secondary.regular
	},
	viewAll: {
		backgroundColor: colors.dark,
		padding: 10,
		borderRadius: 5,
		marginHorizontal: 30,
		marginBottom: 10
	},
	viewAllTxt: {
		color: 'black',
		textAlign: 'center',
		fontSize: 13,
		fontWeight: 'bold',
		fontFamily: fonts.secondary.regular
	}
});

