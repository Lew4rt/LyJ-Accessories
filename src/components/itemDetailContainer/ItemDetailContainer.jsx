import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../itemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("../src/items.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id == id);
        setProduct(selectedProduct);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product}/>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}
