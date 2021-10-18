import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { 
	IconHome, IconHomeActive, IconProduct, 
	IconProductActive, IconProfile, IconProfileActive 
} from '../../assets'

import { Header } from '../../components/Header';
import { colors } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default class Home extends Component {
	render(){
		return(
			 <View style={styles.page}>
			 	<Header />
			 	
			 </View>
		);
	}
}


const styles = StyleSheet.create({
	page: {
		backgroundColor: colors.white,
		
	}
});

