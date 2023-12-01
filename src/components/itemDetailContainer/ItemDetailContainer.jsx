import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Placeholder } from "react-bootstrap";
import ItemDetail from "../itemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/utils";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", id);

    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) =>
        toast.error("Ocurrió un error inesperado", TOAST_SETTINGS)
      );
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <Container className="item_detail_container">
          <div className="item_detail_product_container mt-5">
            <div
              className="item_detail_image"
              style={{
                backgroundColor: "rgb(180 180 180)",
                marginTop: 40,
                minHeight: 400,
              }}
            />
            <div className="item_detail_product_body_container w-100">
              <Placeholder
                as="p"
                animation="glow"
                className="d-flex justify-content-center"
              >
                <Placeholder
                  style={{ width: 250, height: 10 }}
                  bg="secondary"
                  className={"d-flex mt-3 ms-2"}
                />
              </Placeholder>
              <Placeholder
                as="p"
                animation="glow"
                className="d-flex justify-content-center"
              >
                <Placeholder
                  style={{ width: 100, height: 10 }}
                  bg="secondary"
                  className={"d-flex mt-3 ms-2"}
                />
              </Placeholder>
              <hr />
              <div className="item_detail_buy">
                <Placeholder as="p" animation="glow">
                  <Placeholder
                    style={{ width: 60, height: 10 }}
                    bg="secondary"
                    className={"d-flex mt-3 ms-2"}
                  />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder
                    style={{ width: 100, height: 10 }}
                    bg="secondary"
                    className={"d-flex mt-3 ms-2"}
                  />
                </Placeholder>
              </div>
              <hr />
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{ width: 300, height: 10 }}
                  bg="secondary"
                  className={"d-flex mt-3 ms-2"}
                />
              </Placeholder>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
