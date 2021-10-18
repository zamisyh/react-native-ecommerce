import { Dimensions } from 'react-native';
import { heightMobileUi, widthMobileUi } from "../responsive";


export const responsiveWidth = ( width ) => {
	return Dimensions.get('window').width * width / widthMobileUi;
}

export const responsiveHeight = ( height ) => {
	return  Dimensions.get('window').height * height / heightMobileUi;
}