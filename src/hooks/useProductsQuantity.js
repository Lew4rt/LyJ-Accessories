import { useState } from 'react';

const useProductsQuantity = () => {
  const [productsQuantity, setProductsQuantity] = useState(0);

  const increment = () => {
    setProductsQuantity(productsQuantity + 1);
  };

  const reset = () => {
    setProductsQuantity(0);
  };

  return { productsQuantity, increment, reset };
};

export default useProductsQuantity;