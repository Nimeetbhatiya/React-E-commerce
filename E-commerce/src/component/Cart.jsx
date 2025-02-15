/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Cart({ items, onRemove, onIncrement, onDecrement }) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{
            maxWidth: "700px",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            fontFamily: "'Poppins', sans-serif"
        }}>
            <h2 style={{
                fontSize: "26px",
                fontWeight: "bold",
                color: "#333",
                borderBottom: "2px solid #ddd",
                paddingBottom: "10px",
                marginBottom: "20px",
                textAlign: "center"
            }}>Shopping Cart</h2>

            <div>
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#f8f9fa",
                            padding: "12px",
                            marginBottom: "12px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: "60px", width: "60px", marginRight: "12px", borderRadius: "6px" }}
                                />
                                <div>
                                    <p style={{ fontSize: "18px", fontWeight: "600", margin: "0", color: "#333" }}>{item.name}</p>
                                    <p style={{ fontSize: "14px", color: "#666", margin: "5px 0" }}>Price: ${item.price}</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <button
                                    onClick={() => onDecrement(item.id)}
                                    style={{
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        border: "none",
                                        padding: "6px 12px",
                                        fontSize: "16px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "0.3s"
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                                    onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
                                >-</button>

                                <p style={{ fontSize: "16px", fontWeight: "600", color: "#333", margin: "0 8px" }}>
                                    {item.quantity}
                                </p>

                                <button
                                    onClick={() => onIncrement(item.id)}
                                    style={{
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        border: "none",
                                        padding: "6px 12px",
                                        fontSize: "16px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        transition: "0.3s"
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                                    onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
                                >+</button>
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
                                    transition: "0.3s",
                                    margin: "0px 0px 0px 10px"
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4d"}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", color: "#888", fontSize: "16px", marginTop: "20px" }}>
                        Your cart is empty.
                    </p>
                )}
            </div>

            <h3 style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#333",
                marginTop: "20px",
                textAlign: "right",
                borderTop: "2px solid #ddd",
                paddingTop: "15px"
            }}>
                Total: ${total.toFixed(2)}
            </h3>
        </div>
    );
}

export default Cart;
