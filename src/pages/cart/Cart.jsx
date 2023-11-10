import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { BsFillBagHeartFill } from "react-icons/bs"
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <Container>
    <Breadcrumbs location={window.location}/>
    <div className="container d-flex container--cart-main">
      <div className="container container--cart-content">
        <BsFillBagHeartFill className="empty_cart_image" style={{ fontSize: 60 }} />
        <h2>¡Suma productos a tu carrito!</h2>
        <Link to={'/'}>
          <button id="btnCartPlaceholder">Agregar productos</button>
        </Link>
      </div>
      <div className="container container--cart-price">
        <h3>Resumen</h3>
        <hr />
        <p>
          Aquí verás la suma de los importes en tu compra cuando agregues
          productos.
        </p>
      </div>
    </div>
    </Container>
  );
}
