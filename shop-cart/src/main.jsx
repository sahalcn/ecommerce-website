import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartProvider";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById("root")).render(
 
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>

);
