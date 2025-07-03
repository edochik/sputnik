import type { Product } from "@types";
import { formatPrice } from "./formatPrice.ts";

export const formatProductPrice = (products: Product[]) => {
	return products.map(product => {
		const { price, currency, ...rest } = product;
		const formattedPrice = formatPrice(price, currency);
		return { ...rest, price, currency, formattedPrice };
	})
}