import { useEffect, useState } from "react";
import Item from "../item/item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ increment, reset }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("src/items.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category == category)
        category
          ? setProducts(filteredProducts)
          : setProducts(data);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, [category]);

  return (
    <section className="cards_container">
      {products.map((item, index) => (
        <Item key={index} product={item} />
      ))}
    </section>
  );
};

export default ItemListContainer;
