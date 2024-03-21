import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
} from "react-native";
import { TransactionListProps } from "../../interfaces/transactions";
import { WIDTH } from "../../constants/constants";

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <FlatList
			data={transactions}
			style={{ marginTop: 25 }}
			renderItem={({ item }) => {
        const handleColor = item.spread <= 1 ? 'green' : 'red'
        return (
					<TouchableOpacity
						style={styles.button}
						onPress={() => console.log("Item pressed: ", item.coin)}
					>
						<View>
							<View style={styles.symbol}>
								<Text style={{fontSize: 25}}>{item.symbol}</Text>
							</View>
							<View style={styles.leftContainer}>
								<Text style={styles.coinTxt}>{item.coin}</Text>
								<Text style={{color: 'gray'}}>{item.abbreviation}</Text>
							</View>
						</View>
						<View style={styles.rightContainer}>
							<Text style={[styles.spread, {color: handleColor}]}>+{item.spread}%</Text>
							<Text>${item.amount}</Text>
						</View>
					</TouchableOpacity>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		width: WIDTH * 0.9,
		borderRadius: 5,
		borderWidth: 1.5,
    borderColor: 'gray',
		marginBottom: 15,
		paddingHorizontal: 15,
		paddingVertical: 15,
		justifyContent: "space-between",
	},
	symbol: {
		position: "absolute",
		top: 2,
	},
	leftContainer: {
		marginLeft: 30,
	},
  coinTxt: {
    fontWeight: 'bold',
    fontSize: 18
  },
  spread: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  rightContainer: {
    alignItems: 'flex-end'
  }
});

export default TransactionList;
