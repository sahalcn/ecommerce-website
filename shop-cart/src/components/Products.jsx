import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const url =
        search.trim() === ""
          ? "https://dummyjson.com/products"
          : `https://dummyjson.com/products/search?q=${search}`;

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };

    const timer = setTimeout(fetchProducts, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {loading && <p>Loading...</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "220px",
              borderRadius: "8px",
            }}
          >
           
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%" }}
              />
              <h4>{product.title}</h4>
            </Link>

            <p>₹ {product.price}</p>

            
            <button as={Link}
              className="btn-primary"
              style={{ width: "100%" }}
              onClick={() => addToCart(product)}
            >
              view
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
