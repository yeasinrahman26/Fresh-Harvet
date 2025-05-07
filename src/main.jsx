import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import HomeLayout from "./Layout/Homelayout";
import Details from "./Pages/product/Details";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "product/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
    </Provider>
);
