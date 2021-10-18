import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ic from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';


const CartButton = ({ icon, cartTotal, padding}) => {

	const Icon = () => {
		if(icon === "cart"){
			return <Ic name="shopping-cart" size={30} color="#000000" />
		}

		return <Ic name="shopping-cart" size={30} color="#000000" />
	}

	return(
		<TouchableOpacity style={styles.container}>
			<Icon />

			{ cartTotal && (
				<View style={styles.notif}>
					<Text style={styles.textNotif}>{ cartTotal }</Text>
				</View>
			)}

		</TouchableOpacity>
	);
}

export default CartButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 5,

	},
	notif:{
		position: 'absolute',
		top: 5,
		right: 5,
		backgroundColor: 'red',
		borderRadius: 3,
		padding: 3
	},
	textNotif:{
		fontSize: 8
	}
});