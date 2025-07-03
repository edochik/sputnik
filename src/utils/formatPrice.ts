import { currencyToLocale, type Currency } from "@types";


export const formatPrice = (valueInCents: number, currency: Currency) => {
	const locale = currencyToLocale[currency];
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2
	}).format(valueInCents / 100);
}