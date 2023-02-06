import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product?: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <div className="container">
      <div className="dsf-card-style">
        <h3>{product?.name}</h3>
        <h2>R$ {product?.price.toFixed(2)}</h2>
      </div>
    </div>
  );
}
