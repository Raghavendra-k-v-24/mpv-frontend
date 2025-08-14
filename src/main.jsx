import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Login from "./components/LoginPage/Login.jsx";
import { Provider } from "react-redux";
import store from "./redux/index.js";
import Home from "./components/Home.jsx";
import Mortgage from "./components/Mortgage/Mortgage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/mortgage", element: <Mortgage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
