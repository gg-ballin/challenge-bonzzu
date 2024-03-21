import { View, Text, StyleSheet, Dimensions, Modal } from "react-native";
import { WIDTH } from "../../constants/constants";

const Rewards = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Congrats, you have a reward!</Text>
			<Text style={styles.description}>New User Zone</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 0.6,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginVertical: 20,
		width: WIDTH * 0.9,
	},
	title: {
		fontSize: 20,
		marginTop: 55,
	},
	description: {
		fontSize: 15,
		color: "gray",
		marginBottom: 30,
	},
});

export default Rewards;
