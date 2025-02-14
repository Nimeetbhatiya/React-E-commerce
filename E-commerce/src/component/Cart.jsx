/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Cart({ items, onRemove }) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{
            maxWidth: "500px",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px"
        }}>
            <h2 style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
                paddingBottom: "10px",
                marginBottom: "20px"
            }}>Shopping Cart</h2>

            <div>
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#f9f9f9",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    style={{ height: "50px", width: "50px", marginRight: "10px", borderRadius: "5px" }} 
                                />
                                <div>
                                    <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>{item.name}</p>
                                    <p style={{ fontSize: "14px", color: "#666", margin: "5px 0" }}>
                                        ${item.price} x {item.quantity}
                                    </p>
                                </div>
                            </div>
                            <button 
                                onClick={() => onRemove(item.id)}
                                style={{
                                    backgroundColor: "#ff4d4d",
                                    color: "#fff",
                                    border: "none",
                                    padding: "6px 12px",
                                    fontSize: "14px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    transition: "background 0.3s"
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4d"}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", color: "#888" }}>Your cart is empty.</p>
                )}
            </div>

            <h3 style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
                marginTop: "20px",
                textAlign: "right"
            }}>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
