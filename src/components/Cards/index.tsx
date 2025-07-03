import { products } from "@mocks/cards.ts";
import { formatProductPrice } from "@utils/formatProduct.ts";
import { Card } from "../Card/";
import s from "./Cards.module.scss";

export const Cards = () => {
  const formattedProducts = formatProductPrice(products);
  return (
    <ul className={s.Cards}>
      {formattedProducts.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </ul>
  );
};
