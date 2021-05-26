import React from "react";
import {ScrollView, Text, Image, View, ImageBackground, Dimensions} from "react-native";
import {ListItem, List} from "native-base";

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
var background = require('../assets/icons/loading.png');

class SearchBody extends React.Component{
	render(){
		var pokemon = this.props.data;
		if(!pokemon){
			return(<View />)
		}
		return(
			<ImageBackground source={background} style={styles.backgroundImage}>
				<ScrollView style={{flex: 1,}}>
					<Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
					<View style={styles.viewStyle}>
						<Image source={{uri: pokemon.sprites.front_default}} style={styles.img} />
					</View>
					<View style={styles.info}>
						<ListItem itemDivider>
							<Text style={{fonWeight: 'bold'}}>Characters</Text>
						</ListItem>
						<ListItem>
							<Text>Weight - {pokemon.weight}kg</Text>
						</ListItem>
						<ListItem>
							<Text>Height - {pokemon.height*10}cm</Text>
						</ListItem>
						<ListItem>
							<Text>Base experience - {pokemon.base_experience}</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text style={{fonWeight: 'bold'}}>Abilities</Text>
						</ListItem>
						<List
							dataArray={pokemon.abilities}
							renderRow={(item)=>
								<ListItem>
									<Text>{item.ability.name}</Text>
								</ListItem>
							}
						>
						</List>
					</View>
				</ScrollView>
			</ImageBackground>
		)
	}
}

const styles = {
	img: {
		height: 200,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	viewStyle: {
		justifyContent: 'center',
	    alignItems: 'center',
	    flex: 1
	},
	header: {
		fontSize: 30,
		marginTop: 10,
		color: 'white',
		textAlign: 'center'
	},
	backgroundImage: {
		flex: 1,
	    resizeMode: 'cover',
	    width: width,
	    height: height,
	    opacity: 0.7
	},
	info:{
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.9
	}
}

export default SearchBody;