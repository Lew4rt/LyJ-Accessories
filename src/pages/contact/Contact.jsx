import React from "react";
import { BsWhatsapp, BsFillEnvelopeOpenHeartFill, BsFillGeoAltFill, BsFillClockFill } from "react-icons/bs";


export default function Contact() {
  return (
    <>
      <section className="container container--contact-data">
        <div className="row align-items-center row-cols-auto flex-nowrap">
          <BsWhatsapp style={{ fontSize: 25 }} />
          <p className="col">11 6000 4881</p>
        </div>
        <div className="row align-items-center row-cols-auto flex-nowrap">
          <BsFillEnvelopeOpenHeartFill style={{ fontSize: 25 }} />
          <p className="col">giselleanahia@gmail.com</p>
        </div>
        <div className="row align-items-center row-cols-auto flex-nowrap">
          <BsFillGeoAltFill style={{ fontSize: 25 }} />
          <p className="col">Lanús, provincia de Buenos Aires</p>
        </div>
        <div className="row align-items-center row-cols-auto flex-nowrap">
          <BsFillClockFill style={{ fontSize: 25 }} />
          <p className="col">Todos los días de 8:00 a 21:00</p>
        </div>
      </section>
      <section className="container">
        <div data-aos="zoom-in-down">
          <h2 className="title__about-us">Quienes somos</h2>
        </div>
        <div className="container d-flex container--about-us gap-4">
          <div
            data-aos="fade-right"
            className="container--image-about-us"
          />
          <div data-aos="fade-left" className="container--text-about-us">
            <h3>Giselle Acuña</h3>
            <p>
              Giselle Acuña es una apasionada artesana que dedicó su vida a
              crear hermosos accesorios y bisutería de forma artesanal. Con una
              habilidad innata y una imaginación desbordante, Giselle ha llevado
              su pasión por la creación a un nivel excepcional.
            </p>
            <p>
              Desde una temprana edad, Giselle descubrió su amor por la joyería
              y los accesorios únicos. Comenzó a experimentar con diferentes
              materiales y técnicas, desarrollando su propio estilo distintivo.
              Cada pieza que Giselle crea es una obra de arte cuidadosamente
              elaborada, que combina elementos tradicionales con un toque
              moderno y elegante.
            </p>
            <p>
              La atención al detalle y la calidad son aspectos fundamentales en
              el trabajo de Giselle. Utiliza materiales de alta calidad, como
              cristales, piedras semipreciosas y metales nobles, para garantizar
              que cada pieza sea duradera y única.
            </p>
            <p>
              Las creaciones de Giselle han cautivado a personas de todo el
              mundo, y su reputación como diseñadora talentosa y comprometida
              continúa creciendo. Ya sea que estés buscando un accesorio
              especial para una ocasión especial o desees realzar tu estilo
              cotidiano, las creaciones de Giselle Acuña seguramente te
              deleitarán.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
