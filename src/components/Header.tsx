import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import userImg from "../assets/bruno.jpg";
import fonts from "../styles/fonts";

export function Header() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greeting}>Olá,</Text>
				<Text style={styles.userName}>Bruno</Text>
			</View>

			<Image source={userImg} style={styles.image} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
		marginTop: getStatusBarHeight(),
		padding: 20,
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 40,
	},

	greeting: { fontSize: 32, color: colors.heading, fontFamily: fonts.text },

	userName: { fontSize: 32, fontFamily: fonts.heading, lineHeight: 40 },
});
