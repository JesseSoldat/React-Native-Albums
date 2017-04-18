import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';


const AlbumDetail = ({album}) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const {
		headerContentStyle,
		headerTextStyle
	} = styles;

	return (
		<Card>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>{title}</Text>
				<Text>{artist}</Text>
			</View>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	}
}

export default AlbumDetail;