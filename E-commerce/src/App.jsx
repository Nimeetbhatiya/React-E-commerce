/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import Products from './component/Products';

function App() {
  const products = [
    {
      id: 1,
      name: "weyucd",
      price: 345,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "gcgrfth",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "zxcc",
      price: 987,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    setcartItem((e) => {
      return e.map((item) => {
         if(item.id === productIs) {
           return{...item, quantity : item.quantity - 1}
         }
         return item ;
      })
      .filter((item) => item.quantity > 0);
    });
  };
  

  return (
    <>
      <Products product={products} onAddToCart={onAddToCart} />
       <Cart items={cartItem}  onRemove={onRemove} />
    </>
  );
}

export default App;
