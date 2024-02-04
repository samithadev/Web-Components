import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.page.jsx";
import MainPage from "./pages/main/main.page.jsx";
import ImageSlider from "./pages/imageSlider/slider.page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/card-scroll",
    element: <MainPage />,
  },
  {
    path: "/image-slider",
    element: <ImageSlider />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
