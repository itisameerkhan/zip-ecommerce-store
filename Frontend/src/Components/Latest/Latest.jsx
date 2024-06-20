import ProductCard from "../ProductCard/ProductCard";
import "./Latest.scss";
import { useSelector } from "react-redux";

const Latest = () => {
  const products = useSelector((store) => store.product);
  const latestProducts = products.slice(-8);
  return (
    <div className="latest">
      <p className="latest-title">Latest Products</p>
        <div className="latest-main">
        {latestProducts.reverse().map((data) =>(
            <ProductCard data={data} key={data._id} />
        ) )}
        </div>
    </div>
  );
};

export default Latest;
