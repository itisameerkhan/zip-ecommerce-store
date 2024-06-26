import "./style.scss";
import zipLogo from "./assets/zipLogo.webp";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    name: "",
    image_url: "",
    description: "",
    category: "men",
    sub_category: "shirts",
    old_price: "",
    new_price: "",
  });

  const [message, setMessage] = useState("no message");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(data);
    const response = await axios.post(
      "http://localhost:8080/api/store/setdata",
      data
    );
    console.log(response.data);
    setMessage(response.data.message);
    setData({
      name: "",
      image_url: "",
      description: "",
      rating: "",
      category: "men",
      sub_category: "shirts",
      old_price: "",
      new_price: "",
    });
  };

  return (
    <div className="app">
      <div className="app-div">
        <img src={zipLogo} alt="logo" className="logo" />
        <p>Admin page</p>
      </div>
      <div className="app-main">
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={data.name}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            onChange={handleChange}
            value={data.image_url}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </div>
        <div>
          <label>Category</label>
          <select name="category" onChange={handleChange}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <label>Sub Category</label>
          <select name="sub_category" onChange={handleChange}>
            <option value="shirts">Shirts</option>
            <option value="t_shirts">T Shirts</option>
            <option value="trousers">Trousers</option>
            <option value="pants">Pants</option>
            <option value="inner_wear">Inner Wear</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>
        <div>
          <label>Rating</label>
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            value={data.rating}
          />
        </div>
        <div>
          <label>Old Price</label>
          <input
            type="number"
            name="old_price"
            onChange={handleChange}
            value={data.old_price}
          />
        </div>
        <div>
          <label>New Price</label>
          <input
            type="number"
            name="new_price"
            onChange={handleChange}
            value={data.new_price}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
