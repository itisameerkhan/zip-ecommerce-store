import "./Home.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home1 from "../../Components/Home1/Home1";
import Latest from "../../Components/Latest/Latest";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Contexts/productSlice";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/api/store/getdata");
    dispatch(addProducts(response.data.data));
    setProductData(response.data.data);
  };

  useEffect(() => {
    getData();
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
  }, []);

  return (
    <div className="home">
      {productData.length > 0 ? (
        <div>
          <Home1 />
          <Latest />
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Home;
