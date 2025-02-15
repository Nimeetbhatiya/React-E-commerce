/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Products({ product, onAddToCart }) {
  return (
    <div style={{
      display: "flex",
    //   flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
      // backgroundColor: "#f8f9fa",
    }}>
      {product.map((prd, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={prd.image}
            alt={prd.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3 style={{ margin: "15px 0", color: "#333" }}>{prd.name}</h3>
          <p style={{ color: "#666", fontSize: "18px" }}>${prd.price}</p>
          <button
            onClick={() => {onAddToCart(prd)
            }}
            style={{
              backgroundColor: "#007bff",
              // color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
