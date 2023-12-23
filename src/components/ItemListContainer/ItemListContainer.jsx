import { useEffect, useState } from "react";
import React from 'react';
import Item from "../item/Item.jsx";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { Container } from "react-bootstrap";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { Placeholder } from "react-bootstrap";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/utils";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      const db = getFirestore();
      let productsCollectionRef = collection(db, "products");

      if (category) {
        productsCollectionRef = query(
          productsCollectionRef,
          where("category", "==", category)
        );
      }

      try {
        const snapshot = await getDocs(productsCollectionRef);
        const productsData = snapshot.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(productsData);
        setKey((prevKey) => prevKey + 1);
        setIsLoading(false)
      
      } catch (error) {
        toast.error("Ocurrió un error inesperado", TOAST_SETTINGS)
        setIsLoading(false)
      }
    };

    fetchProducts();
  }, [category]);

  const RepeatPlaceholders = ({ times, placeholder }) => {
    const placeholders = [];
    for (let i = 0; i < times; i++) {
      placeholders.push(React.cloneElement(placeholder, { key: i }));
    }

    return placeholders;
  };

  const PlaceholderCardItem = () => (
    <div className="card" data-aos="fade-up" data-aos-duration={600} style={{backgroundColor:"#cacaca"}}>
      <div
        className="card_media"
        style={{
          backgroundColor:"rgb(180 180 180)",
        }}
      />
      <div className="card_description">
        <Placeholder as="p" animation="glow">
          <Placeholder
            style={{ width: 100, height: 20 }}
            bg="secondary"
            className={"d-flex mt-3 ms-2"}
          />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder
            style={{ width: 250, height: 10 }}
            bg="secondary"
            className={"d-flex mt-3 ms-2"}
          />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder
            style={{ width: 230, height: 10 }}
            bg="secondary"
            className={"d-flex mt-3 ms-2"}
          />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder
            style={{ width: 240, height: 10 }}
            bg="secondary"
            className={"d-flex mt-3 ms-2"}
          />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder
            style={{ width: 60, height: 10 }}
            bg="secondary"
            className={"d-flex mt-3 ms-2"}
          />
        </Placeholder>
      </div>
    </div>
  );

  return (
    <>
      <Container>
        {category && <Breadcrumbs location={window.location} />}
        <section className="cards_container">
          {!isLoading ? (
            products.map((item) => (
              <Item key={`${item.id}_${key}`} product={item} />
            ))
          ) : (
            <RepeatPlaceholders
              times={6}
              placeholder={<PlaceholderCardItem />}
            />
          )}
        </section>
      </Container>
    </>
  );
};

export default ItemListContainer;
