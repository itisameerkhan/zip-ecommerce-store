import "./Product.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/store/getDataById",
      { id: params.id }
    );
    setData(response.data.data);
  };

  const handleSubmit = async () => {
    console.log("handle submit");
    const jwtToken = localStorage.getItem("zip-jwtToken");
    const response = await axios.post(
      "http://localhost:8080/api/user/handleCart",
      {
        jwtToken: jwtToken,
        name: data.name,
        image_url: data.image_url,
        description: data.description,
        category: data.category,
        sub_category: data.sub_category,
        rating: data.rating,
        new_price: data.new_price,
        old_price: data.old_price,
      }
    );
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
    getData();
  }, []);

  if (data === null) return <Loader />;
  return (
    <div className="products">
      <div className="product-main">
        <div className="product-main-left">
          <img src={data.image_url} alt="" />
        </div>
        <div className="product-main-right">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>
            <span className="material-symbols-outlined">star</span>
            {data.rating}
          </p>
          <div className="p-m-1">
            <p>₹ {data.new_price}</p>
            <p>₹ {data.old_price}</p>
          </div>
          <div className="p-m-2">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XLL</p>
          </div>
          <div className="p-m-3">
            <button onClick={handleSubmit}>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
          <div className="p-m-4">
            <p>More details</p>
            <p> 50% Polyester 25% Cotton 25%</p> <p>Rayon 30</p>
            <p> Singles 4.3 oz</p>
            <p> Side seams</p>
            <p> Retail Fit </p>
            <p>Tear-away </p>
            <p>Label Classic Fit </p>
            <p>Extra Soft Cotton Blend</p>
          </div>
          <div className="p-m-5">
            <p>
              * Quality is guaranteed. If there is a print error or visible
              quality issue, we'll replace or refund it.
            </p>
            <p>* We do not accept general returns or sizing-related returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
