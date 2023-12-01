import React from "react";
import { Row, Image, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartProduct({ product, quantity, removeItem }) {
  const fileExtension = product.imageSrc.split(".").pop();
  const isImage = ["jpg", "jpeg", "png", "gif"].includes(fileExtension);
  const isVideo = ["mp4", "webm"].includes(fileExtension);

  const handleRemoveProduct = () => {
    removeItem(product.id)
  }
  
  return (
    <>
      <Row className="cart_row d-flex flex-row">
        <Col className="cart_item_image_container">
          {isImage ? (
            <Image src={product.imageSrc} rounded className="cart_item_image" />
          ) : isVideo ? (
            <video autoPlay muted loop className="cart_item_image">
              <source src={product.imageSrc} type={`video/${fileExtension}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Unsupported media type</p>
          )}
        </Col>
        <Col>
          <div className="d-flex gap-2">
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <h3 className="cart_item_title">{product.title}</h3>
            </Link>
            {quantity > 1 && <p>x{quantity}</p>}
          </div>
          <Button variant="link" className="button_cart_item_delete" onClick={handleRemoveProduct}>
          {quantity > 1 ? <p>Eliminar todos</p> : <p>Eliminar</p>}
          </Button>
        </Col>
        <Col>
          <p className="cart_item_price">ARS$ {product.price * quantity}</p>
        </Col>
      </Row>
      <hr className="m-0" />
    </>
  );
}
