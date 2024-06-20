import "./Home.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home1 from "../../Components/Home1/Home1";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if (jwtToken === null) navigate("/");
  }, []);

  return (
    <div className="home">
      <Home1 />
    </div>
  );
};

export default Home;
