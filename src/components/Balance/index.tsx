import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface BalanceProps {
	balance: number;
}

const Balance = ({ balance }: BalanceProps) => {
	const [showBalance, setShowBalance] = useState(true);
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Total Balance</Text>
				<TouchableOpacity
					onPress={() => setShowBalance(!showBalance)}
					style={styles.showBalanceBtn}
				>
					<Text>{showBalance ? "Hide Balance" : "Show Balance"}</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text style={styles.balance}>
					{showBalance ? `$ ${balance}` : "$ ****"}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
		marginTop: 20,
	},
	content: {
		alignItems: "center",
		flexDirection: "row",
	},
	title: {
		fontSize: 20,
		marginRight: 10,
	},
	showBalanceBtn: {
		paddingHorizontal: 10,
		paddingVertical: 7,
		borderWidth: 1,
	},
	balance: {
		fontSize: 31,
		fontWeight: "bold",
		marginTop: 10,
	},
});

export default Balance;
