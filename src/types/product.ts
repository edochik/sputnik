import type { Currency } from "./currency.ts";

export interface Product {
	title: string;
	origin: string;
	price: number;
	currency: Currency;
	imageUrl: string;
}
