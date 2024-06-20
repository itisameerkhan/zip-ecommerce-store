import "./Product.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
  }, []);
  return (
    <div className="products">
      <h1>Product</h1>
    </div>
  );
};

export default Product;
