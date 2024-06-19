import "./Category.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
  }, []);

  return (
    <div className="category">
        <h1>category</h1>
    </div>
  )
}

export default Category