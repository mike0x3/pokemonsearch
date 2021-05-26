import React from "react";
import {View, Image} from "react-native";

var loadingImage = require('../assets/icons/loading.gif');

class PokeLoader extends React.Component{
	render(){
		return(
			<View style={styles.viewStyle}>
				<Image 
					source={loadingImage}
					style={styles.imageStyle}
				/>
			</View>
		)
	}
}

const styles = {
	imageStyle:{
		height: 400,
		width: 400,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center', 
	}
}

export default PokeLoader;