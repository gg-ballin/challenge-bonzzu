import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	FlatListProps,
	Dimensions,
} from "react-native";

type Cryptocurrency = "BTC" | "ETH" | "POLYGON";

type Transaction = {
	coin: string;
	amount: number;
	spread: number;
	symbol: Cryptocurrency;
};

interface TransactionListProps extends FlatListProps<Transaction> {
	transactions: Transaction[];
	onPress: (transaction: Transaction) => void;
}

const TransactionList = ({ transactions, onPress }: TransactionListProps) => {
	return (
		<FlatList
			data={transactions}
			style={{ marginTop: 25 }}
			renderItem={({ item }) => {
				console.log("item:", item.coin);
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
						onPress={onPress}
					>
						<View>
							<Text>{item.coin}</Text>
							<Text>{item.symbol}</Text>
						</View>
						<View>
							<Text>{item.spread}%</Text>
							<Text>${item.amount}</Text>
						</View>
					</TouchableOpacity>
				);
			}}
		/>
	);
};

export default TransactionList;
