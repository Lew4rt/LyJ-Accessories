import React, { useContext, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { BsFillBagHeartFill } from "react-icons/bs";
import {
  Container,
  Modal,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartProduct from "../../components/cartProduct/CartProduct";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/utils";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";


export default function Cart() {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const updateStock = async (productId, quantity) => {
    try {
      const db = getFirestore();
  
      const productRef = doc(db, "products", productId);
  
      const productDoc = await getDoc(productRef);
      const currentStock = productDoc.data().stock;
  
      await updateDoc(productRef, {
        stock: currentStock - quantity,
      });
  
    } catch (error) {
      toast.error("Ocurrió un error inesperado", TOAST_SETTINGS)
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    }else{
      event.preventDefault();
      for (const item of cart) {
        if(item.product.stock < item.quantity){
          toast.error(`Disculpe, no hay suficiente stock de ${item.product.title}`, TOAST_SETTINGS)
          handleClose();
          return
        }
        updateStock(item.product.id, item.quantity);
      }
      toast.success("Compra realizada, se le contactará en breve", TOAST_SETTINGS)
      clearCart();
      handleClose();
      navigate("/");
    }

    setValidated(true);
  };
  return (
    <>
      <Container>
        <Breadcrumbs location={window.location} />
        <div className="container d-flex container--cart-main">
          {cart &&
            (cart.length !== 0 ? (
              <>
                <Container className="container container--cart-content">
                  <h2 className="cart_title">Productos en el carrito</h2>
                  <hr className="m-0" />
                  {cart.map((item, index) => (
                    <CartProduct
                      key={index}
                      product={item.product}
                      quantity={item.quantity}
                      removeItem={removeItem}
                    />
                  ))}
                </Container>
                <div className="container container--cart-price">
                  {/* Acá decidí hardcodear el envío gratis para fines puramente de diseño */}
                  <h3>Resumen</h3>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>{cart.length > 1 ? "Productos" : "Producto"}</span>
                    <span>ARS$ {totalPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Envío</span>
                    <span style={{ color: "green" }}>Gratis</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4 style={{ fontSize: 18, marginBlock: 30 }}>Total:</h4>
                    <h4 style={{ fontSize: 18, marginBlock: 30 }}>
                      ARS$ {totalPrice}
                    </h4>
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="button_add_products"
                      onClick={handleShow}
                    >
                      Confirmar compra
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="container empty_container--cart-content">
                  <BsFillBagHeartFill
                    className="empty_cart_image"
                    style={{ fontSize: 60 }}
                  />
                  <h2>¡Suma productos a tu carrito!</h2>
                  <Link to={"/"}>
                    <button
                      className="button_add_products"
                      id="btnCartPlaceholder"
                    >
                      Agregar productos
                    </button>
                  </Link>
                </div>
                <div className="container empty_container--cart-price">
                  <h3>Resumen</h3>
                  <hr />
                  <p>
                    Aquí verás la suma de los importes en tu compra cuando
                    agregues productos.
                  </p>
                </div>
              </>
            ))}
        </div>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal_purchase_confirmation"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de compra</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control required type="text" placeholder="John Doe" />
              <Form.Control.Feedback>Listo!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Ingresa un nombre para saber quien realizó la compra
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mt-3" controlId="validationCustomUsername">
              <Form.Label>Correo electrónico</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback>Listo!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Ingresa un email para poder contactarte
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mt-3" controlId="validationCustom03">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="number" placeholder="11 1234 1234" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un teléfono válido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Check label="Prefiero que me contacten por Whatsapp" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" className="btn_purchase">
            Comprar
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
