import "./Category.scss";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import axios from "axios";
import { addProducts } from "../../Contexts/productSlice";

const Category = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    bannerImg: "",
    categoryName: "",
  });

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/api/store/getdata");
    dispatch(addProducts(response.data.data));
    setProductData(response.data.data);
    setFilteredData(
      productData.filter((data) => {
        if (location.pathname === "/shop/men") return data.category === "men";
        else if (location.pathname === "/shop/women")
          return data.category === "women";
        else if (location.pathname === "/shop/kids")
          return data.category === "kids";
      })
    );

    if (location.pathname === "/shop/men") {
      setCategoryData({
        categoryName: "Men Section",
        bannerImg:
          "https://mir-s3-cdn-cf.behance.net/project_modules/hd/16b39f94905625.5edd332826fe8.jpg",
      });
    } else if (location.pathname === "/shop/women") {
      setCategoryData({
        categoryName: "women Section",
        bannerImg:
          "https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg",
      });
    } else if (location.pathname === "/shop/kids") {
      setCategoryData({
        categoryName: "Kids Section",
        bannerImg:
          "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/cf0a2b30d87be3250c91f80c1691baf5378c7af01673860444.jpg",
      });
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
    getData();
  }, [location.pathname, filteredData]);

  return (
    <div className="category">
      <p className="category-name">{categoryData.categoryName}</p>
      <img src={categoryData.bannerImg} alt="bannerimg" className="category-banner-img" />
      <div className="product-cards-main">
        {filteredData.map((data) => (
          <ProductCard data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
