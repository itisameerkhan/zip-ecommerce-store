import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  const [show, setShow] = useState(false);

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
        localStorage.setItem("zip-jwtToken", response.data.jwtToken)
        navigate("/home");
      }
    } else {
      const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (data.username === "" || data.email === "" || data.password === "") {
        setError({
          errorStatus: true,
          errorMessage: "All Fields are required",
        });
        return;
      }
      if (!emailRegex.test(data.email)) {
        setError({
          errorStatus: true,
          errorMessage: "Invalid email address",
        });
        return;
      }
      if (!regularExpression.test(data.password)) {
        setError({
          errorStatus: true,
          errorMessage:
          "password should contain atleast one number and one special character",
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
        localStorage.setItem("zip-jwtToken", response.data.jwtToken);
        navigate("/home");
      }
    }
  };
  
  useEffect(() => {
    const jwtToken = localStorage.getItem("zip-jwtToken");
    if(jwtToken !== null) navigate("/home");
  },[]);
  
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
          <div className="pass-div">
            <input
              type={show ? "text" : "password"}
              value={data.password}
              name="password"
              onChange={handleChange}
            />
            <span onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</span>
          </div>
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
        {error.errorStatus && (
          <div className="error-login">
            <p>{error.errorMessage}</p>
          </div>
        )}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Login;
