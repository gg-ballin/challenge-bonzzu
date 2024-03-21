import { View, SafeAreaView } from "react-native";
import Balance from "../../components/Balance/index";
import Rewards from "../../components/Rewards";
import TransactionList from "../../components/Transactions";
import { transactionList } from "../../data/data";

const HomeScreen = () => {
	return (
		<>
			<SafeAreaView style={{ marginTop: 80 }} />
			<View style={{ paddingHorizontal: 10 }}>
				<Balance balance={0.5641} />
				<Rewards />
				<TransactionList transactions={transactionList} />
			</View>
		</>
	);
};

export default HomeScreen;
