import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BalanceProps {
	balance: number;
}

const Balance = ({ balance }: BalanceProps) => {
	const [showBalance, setShowBalance] = useState(true);
	return (
		<View style={{ alignItems: "flex-start" }}>
			<View style={{ alignItems: "center", flexDirection: "row" }}>
				<Text>Total Balance</Text>
				<TouchableOpacity
					onPress={() => setShowBalance(!showBalance)}
					style={{
						paddingHorizontal: 10,
						paddingVertical: 7,
						borderWidth: 1,
					}}
				>
					<Text>Show Balance</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text>
					{showBalance ? balance : "Press the button to show balance"}
				</Text>
			</View>
		</View>
	);
};

export default Balance;
