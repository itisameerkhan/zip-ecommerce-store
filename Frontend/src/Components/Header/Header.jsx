import "./Header.scss";
import Logo from "../../assets/zipLogo.webp";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("zip-jwtToken");
  };

  return (
    <div className="header">
      {location.pathname === "/" ? (
        <div className="nav-header-1">
          <img src={Logo} alt="logo" />
          <p>ZIP Clothing & co</p>
        </div>
      ) : (
        <section>
          <img src={Logo} alt="logo" />
          <nav>
            <NavLink to={"/home"}>HOME</NavLink>
            <NavLink to={"/shop/men"}>MEN</NavLink>
            <NavLink to={"/shop/women"}>WOMEN</NavLink>
            <NavLink to={"/shop/kids"}>KIDS</NavLink>
          </nav>
        </section>
      )}
      {location.pathname !== "/" && (
        <div className="header-right">
          <Link to={"/checkout/cart"} className="logout">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
          <Link to={"/"} onClick={handleLogout} className="logout">
            <span className="material-symbols-outlined ">logout</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
