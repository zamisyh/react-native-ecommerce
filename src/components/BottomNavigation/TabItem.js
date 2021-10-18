import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
	IconHome, IconHomeActive, 
	IconProfile, IconProfileActive, 
	IconProduct, IconProductActive} 
from '../../assets';

import { colors, fonts } from '../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {

	const Icon = () => {
		if(label === "Home"){
			return isFocused ? <IconHomeActive /> : <IconHome />
		}else if(label === 'Product'){
			return isFocused ? <IconProductActive /> : <IconProduct />
		}else{
			return isFocused ? <IconProfileActive /> : <IconProfile />
		}

		return <IconHome />
	}

	return(
		<TouchableOpacity
            // key={index}
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
          	<Icon />
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
        </TouchableOpacity>
	);
}

export default TabItem;

const styles = StyleSheet.create({
	container:{
		alignItems: 'center',
	},
	text: (isFocused) => ({
		color: isFocused ? colors.white : colors.secondary,
		fontSize: 11,
		marginTop: 4,
		fontFamily: fonts.secondary.regular
	})
});