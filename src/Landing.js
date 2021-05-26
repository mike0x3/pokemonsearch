import React from 'react';
import {Text, View, Platform, ImageBackground} from 'react-native';
import {Button} from 'native-base';


var myBackground = require('../assets/icons/landing.jpg');

class Landing extends React.Component {
	render(){
		return(
			
			<ImageBackground source={myBackground} style={{flex: 1, resizeMode: 'cover'}}>
		        <View style={styles.viewStyle}>
		           <Text style={styles.titleStyle}>Welcome to PokeSearch!</Text>
		           <Button 
		          	 block={true} 
		          	 style={styles.buttonStyle} 
		          	 onPress={()=>this.props.switchScreen("search")}
		           >
		           <Text style={styles.buttonTextStyle}>Search</Text></Button>
		        </View>
		    </ImageBackground>
			
		);
	}
};

const styles = {
	viewStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	    alignItems: 'center',
	},
	titleStyle : {
	    fontSize: 25,
	 },
	 buttonStyle : {
	    margin: 10,
	 },
	 buttonTextStyle : {
	    color: '#ffffff',
	 },
};

export default Landing;