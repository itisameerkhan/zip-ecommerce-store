import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Category from "./Pages/Category/Category.jsx";
import { Provider } from "react-redux";
import appStore from "./Contexts/appStore.js";
import Product from "./Pages/Product/Product.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop/men",
        element: <Category />,
      },
      {
        path: "/shop/women",
        element: <Category />,
      },
      {
        path: "/shop/kids",
        element: <Category />,
      },
      {
        path: "/products/shop/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
