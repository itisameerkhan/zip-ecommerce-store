import { useEffect, useState } from "react";
import "./AddToCart.scss";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const AddToCart = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    const response = await axios.post(
      "http://localhost:8080/api/user/getCartData",
      { jwtToken }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === null) return <Loader />;

  return (
    <div className="add-to-cart">
      <h1>cart item</h1>
      <table>
        <tr>
          <th>Image</th>
          <th>Product name</th>
          <th>Price</th>
          <th>check out</th>
        </tr>
        {data.reverse().map((data) => (
          <tr>
            <td>
              <img src={data.image_url} alt="logo" />
            </td>
            <td>{data.name}</td>
            <td>{data.new_price}</td>
            <td>
              <button>REMOVE</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AddToCart;
