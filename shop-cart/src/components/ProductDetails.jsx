import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back</Link>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img src={product.thumbnail} width="300" />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>

          <button className="btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
