import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from "react-native";

type Cryptocurrency = "BTC" | "ETH" | "POLYGON";

export type Transaction = {
	coin: string;
	amount: number;
	spread: number;
	symbol: Cryptocurrency;
};

interface TransactionListProps {
	transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
	return (
		<FlatList
			data={transactions}
      style={{marginTop: 25}}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity
						style={{
							flexDirection: "row",
							width: Dimensions.get("window").width * 0.9,
							borderRadius: 5,
							borderWidth: 1,
							marginBottom: 15,
							paddingHorizontal: 15,
							paddingVertical: 10,
							justifyContent: "space-between",
						}}
						onPress={() => console.log('Item pressed: ', item.coin)}
					>
						<View>
							<Text>{item.coin}</Text>
							<Text>{item.symbol}</Text>
						</View>
						<View>
							<Text>{item.spread}</Text>
							<Text>${item.amount}</Text>
						</View>
					</TouchableOpacity>
				);
			}}
		/>
	);
};

export default TransactionList;
