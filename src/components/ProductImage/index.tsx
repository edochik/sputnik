import s from "./ProductImage.module.scss";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export const ProductImage = ({ src, alt }: Props) => {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    if (alt === "Кофе арабика") {
      setHasError(true);
    }
  }, [alt]);
  if (hasError) {
    return (
      <div className={s.ProductImage}>
        <img src="./nophoto.png" alt="placeholder" />
      </div>
    );
  }
  return (
    <div className={s.ProductImage}>
      <img src={src} alt={alt} onError={() => setHasError(true)} />
    </div>
  );
};
