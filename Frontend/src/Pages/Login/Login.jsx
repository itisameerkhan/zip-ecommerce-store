import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: "null",
  });
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setError({
      errorStatus: true,
      errorMessage: "",
    });

    console.log(data);

    if (isLogin) {
      if (data.email === "" || data.password === "") {
        setError({
          errorStatus: true,
          errorMessage: "All Fields are required",
        });
        return;
      }
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(response);
      if (response.data.success === false) {
        setError({
          errorStatus: true,
          errorMessage: response.data.message,
        });
      } else {
        console.log("login successfully");
        console.log(response.data);
        navigate("/home");
      }
    } else {
      if (data.username === "" || data.email === "" || data.password === "") {
        setError({
          errorStatus: true,
          errorMessage: "All Fields are required",
        });
        return;
      }
      const response = await axios.post(
        "http://localhost:8080/api/user/signup",
        data
      );
      if (response.data.success === false) {
        setError({
          errorStatus: true,
          errorMessage: response.data.message,
        });
        return;
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <div className="login">
      <div className="login-main">
        <p className="title">{isLogin ? "Login" : "Sign up"}</p>
        {!isLogin && (
          <div>
            <label>username</label>
            <input
              type="text"
              value={data.username}
              name="username"
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label>email</label>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>{isLogin ? "Login" : "Sign up"}</button>
        <div className="account-exists">
          {isLogin ? (
            <p>
              Dont have an account.
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account.{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
        <div className="error-login">
          {error.errorStatus && <p>{error.errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
