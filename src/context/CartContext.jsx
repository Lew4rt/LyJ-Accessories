import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../utils/utils";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (product, quantity) => {
    const selectedProduct = cart.find((item) => item.product.id === product.id);

    if (!selectedProduct) {
      if(quantity > 0){
        setCart((prevCart) => [...prevCart, { product, quantity }]);
        setTotalQuantity((prevQuantity) => prevQuantity + quantity);
        setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
        toast.success(`Producto agregado al carrito`, TOAST_SETTINGS);
      }
    } else {
      const newCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });

      setCart(newCart);
      setTotalQuantity((prevQuantity) => prevQuantity + quantity);
      setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    }
  };

  const removeItem = (id) => {
    const selectedProduct = cart.find((item) => item.product.id === id);
    const newCart = cart.filter((item) => item.product.id !== id);

    setCart(newCart);
    setTotalQuantity((prevQuantity) => prevQuantity - selectedProduct.quantity);
    setTotalPrice(
      (prevPrice) =>
        prevPrice - selectedProduct.product.price * selectedProduct.quantity
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalQuantity,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
