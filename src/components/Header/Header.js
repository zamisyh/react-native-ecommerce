import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { colors, responsiveHeight, fonts } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CartButton, Distance} from '../Child';



export default class Header extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.wrapperHeader}>

					<View style={styles.searchSection}>
						<Icon name="search" size={30} color="#000000" />
						<TextInput 
							style={styles.input}
							placeholder="Cari Product ..." 
							placeholderTextColor="#A0A0A0"
							
						/> 
					</View>
					<Distance width={10} />
					<CartButton icon="cart" /* cartTotal={2} */ />
					
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: responsiveHeight(125),
	},
	wrapperHeader:{
		marginTop: 15,
		marginHorizontal: 30, 
		flexDirection: 'row'
	},
	searchSection: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: colors.white,
		borderRadius: 5,
		paddingLeft: 10,
		color: '#A0A0A0',

	},
	input: {
		fontSize: 16,
		color: '#A0A0A0',
		fontFamily: fonts.secondary.regular
	}
});