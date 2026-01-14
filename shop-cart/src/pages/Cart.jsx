import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return <h2 style={{ padding: "30px" }}>Cart is empty 🛒</h2>;

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "15px",
            padding: "15px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            marginBottom: "15px",
            alignItems: "center",
          }}
        >
          <img src={item.thumbnail} width="80" alt={item.title} />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>

            {/* Quantity Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  );
};

export default Cart;
