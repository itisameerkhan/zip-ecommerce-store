import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {
    _id,
    name,
    image_url,
    description,
    category,
    sub_category,
    rating,
    new_price,
    old_price,
  } = props.data;

  return (
    <Link to={`/products/shop/${_id}`}>
      <div className="product-card">
        <img
          src={`${image_url}`}
          alt="img"
        />
        <div>
          <p>{name}</p>
          <p>{category}</p>
          <p>
            <span>₹ {new_price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
