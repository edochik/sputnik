import s from "./ProductImage.module.scss";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export const ProductImage = ({ src, alt }: Props) => {
  const [hasError, setHasError] = useState(false);
  const currentSrc = hasError || src === "" ? "./nophoto.png" : src;
  const currentAlt = hasError || src === "" ? "Нет фото" : alt;
  return (
    <div className={s.ProductImage}>
      <img
        src={currentSrc}
        alt={currentAlt}
        onError={() => setHasError(true)}
      />
    </div>
  );
};
