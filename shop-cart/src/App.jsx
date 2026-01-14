import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import NavBarD from "./components/NavbarD";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <NavBarD/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
       
          <Route path="/login" element={<Login/>} />  
          <Route path="/register" element={<Register/>} />
          
             <Route path="/cart" element={
              <ProtectedRoute>
             <Cart />
             </ProtectedRoute>
             } />
          
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
