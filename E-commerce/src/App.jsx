/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import Products from './component/Products';

function App() {
  const products = [
      {
        id: 1,
        name: "Watch",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      },
    {
      id: 2,
      name: "Instamax",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Car",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Bag",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Jordan",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [cartItem, setcartItem] = useState([]);

  const onAddToCart = (product) => {
     setcartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if(existingItem){

        return prevItems.map((item) => 
        item.id === product.id
         ? {...item, quantity : item.quantity + 1}
          : item
        );
      }
      return [...prevItems, {... product , quantity : 1}];
     });
  };

  const onRemove = (productIs) => {
    setcartItem((prevItems) => prevItems.filter((item) => item.id !== productIs));
  };

  const onIncrement = (productIs) => {
    setcartItem((e) => {
      return e.map((item) => {
        if(item.id === productIs) {
          return{...item, quantity : item.quantity + 1}
        }
        return item ;
     })
   });
 };
  
 const onDecrement = (productId) => {
  setcartItem((prevItems) =>
    prevItems
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  

  return (
    <>
      <Products product={products} onAddToCart={onAddToCart} />
       <Cart items={cartItem}  onRemove={onRemove} onDecrement={onDecrement} onIncrement={onIncrement}/>
    </>
  );
}

export default App;
