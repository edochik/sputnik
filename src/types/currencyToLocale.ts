import type { Currency } from "./currency.ts";
import type { Locale } from "./locale.ts";

export const currencyToLocale: Record<Currency, Locale> = {
	USD: 'en-US',
	EUR: 'de-DE',
	RUB: 'ru-RU'
};