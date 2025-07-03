import type { Product } from "@types";
import s from "./Card.module.scss";
import { ProductImage } from "@components/ProductImage/index.tsx";

interface Props extends Omit<Product, "price"> {
  formattedPrice: string;
}

export const Card = ({ title, origin, formattedPrice, imageUrl }: Props) => {
  return (
    <li className={s.Card}>
      <h3 className={s.title}>Название: {title}</h3>
      <p className={s.country}>Страна: {origin}</p>
      <p className={s.price}>Цена: {formattedPrice}</p>
      <ProductImage src={imageUrl} alt={title} />
    </li>
  );
};
