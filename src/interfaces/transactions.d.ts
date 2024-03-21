export type Abbreviation = "BTC" | "ETH" | "POLYGON";
export type Symbol = "₿" | "Ξ" | "β";

export type Transaction = {
	coin: string;
	amount: number;
	spread: number;
	symbol: Symbol;
  abbreviation: Abbreviation;
};

export interface TransactionListProps {
	transactions: Transaction[];
}