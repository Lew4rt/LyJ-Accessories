import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import QuantitySelector from "../quantitySelector/QuantitySelector";

export default function ItemDetail({ product }) {
  const fileExtension = product.imageSrc.split(".").pop();
  const isImage = ["jpg", "jpeg", "png", "gif"].includes(fileExtension);
  const isVideo = ["mp4", "webm"].includes(fileExtension);
  const [quantity, setQuantity] = useState(1);
  const { cart } = useContext(CartContext);
  const [tempStock, setTempStock] = useState();

  useEffect(() => {
    setTempStock(product.stock)
    const productAlreadyInCart = cart.find((item) => item.product.id === product.id)
    if(productAlreadyInCart){
      setTempStock(product.stock - productAlreadyInCart.quantity)
    }
  }, [cart, product, quantity])

  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <>
      <Container className="item_detail_container">
        <Breadcrumbs
          location={window.location}
          productTitle={product ? product.title : ""}
        />
        <div className="item_detail_product_container">
          {isImage ? (
            <Image
              src={product.imageSrc}
              fluid
              rounded
              className="item_detail_image"
            />
          ) : isVideo ? (
            <video autoPlay muted loop className="item_detail_image">
              <source src={product.imageSrc} type={`video/${fileExtension}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Unsupported media type</p>
          )}
          <div className="item_detail_product_body_container">
            <h1 className="item_detail_title">{product.title}</h1>
            <h2 className="item_detail_price">ARS${product.price}</h2>
            <hr />
            <div className="item_detail_buy">
              <QuantitySelector
                stock={tempStock}
                quantity={quantity}
                setQuantity={setQuantity}
              />
              {quantity !== 0 && (
                <Button
                  className="item_detail_cart_button"
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </Button>
              )}
            </div>
            <hr />
            <p className="item_detail_description">{product.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
}
